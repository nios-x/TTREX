"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSellProposals = exports.buySellProposal = exports.createSellProposal = void 0;
const db_1 = __importDefault(require("../config/db"));
const ethers_1 = require("ethers");
const PropertyNFT_1 = require("../abi/PropertyNFT");
const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers_1.ethers.Contract(process.env.NFT_CONTRACT_ADDRESS, PropertyNFT_1.propertyAbi.abi, signer);
const createSellProposal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b;
    try {
        const { walletAddress, fractionId, shardsForSale, pricePerShard } = req.body;
        if (!walletAddress || !fractionId || !shardsForSale || !pricePerShard) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const fraction = yield db_1.default.fraction.findUnique({
            where: { id: fractionId },
            include: { property: true },
        });
        if (!fraction)
            return res.status(404).json({ error: "Fraction not found" });
        if (shardsForSale > fraction.supply) {
            return res.status(400).json({ error: "Cannot sell more shards than owned" });
        }
        // Update fraction supply
        yield db_1.default.fraction.update({
            where: { id: fractionId },
            data: { supply: { decrement: shardsForSale } },
        });
        // Ensure numeric token IDs exist
        const propertyToken = fraction.property.tokenId;
        const fractionToken = fraction.tokenId;
        if (!propertyToken || !fractionToken) {
            return res.status(500).json({ error: "Property or Fraction not mapped to tokenId" });
        }
        // Call on-chain contract
        const tx = yield contract.createSellProposal(propertyToken, fractionToken, shardsForSale, ethers_1.ethers.parseEther(pricePerShard.toString()));
        const receipt = yield tx.wait();
        const event = (_a = receipt.events) === null || _a === void 0 ? void 0 : _a.find((e) => e.event === "SellProposalCreated");
        const proposalId = (_b = event === null || event === void 0 ? void 0 : event.args) === null || _b === void 0 ? void 0 : _b.proposalId.toNumber();
        const proposal = yield db_1.default.sellProposal.create({
            data: {
                id: proposalId.toString(),
                propertyId: fraction.propertyId,
                fractionId: fraction.id,
                walletId: walletAddress,
                shardsForSale,
                remaining: shardsForSale,
                pricePerShard,
            },
        });
        res.status(201).json({ message: "Sell proposal created", proposal, txHash: tx.hash });
    }
    catch (err) {
        console.error("Create SellProposal error:", err);
        res.status(500).json({ error: "Failed to create proposal", details: err.message });
    }
});
exports.createSellProposal = createSellProposal;
const buySellProposal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { buyerWalletAddress, proposalId, shardsToBuy } = req.body;
        if (!buyerWalletAddress || !proposalId || !shardsToBuy) {
            return res.status(400).json({ error: "Missing required fields" });
        }
        const buyerWallet = yield db_1.default.wallet.findUnique({ where: { address: buyerWalletAddress } });
        if (!buyerWallet)
            return res.status(404).json({ error: "Buyer wallet not found" });
        const proposal = yield db_1.default.sellProposal.findUnique({
            where: { id: proposalId },
            include: { fraction: { include: { property: true } } },
        });
        if (!proposal)
            return res.status(404).json({ error: "Sell proposal not found" });
        if (proposal.remaining < shardsToBuy) {
            return res.status(400).json({ error: "Not enough shards available" });
        }
        // Use numeric fraction token
        const fractionToken = proposal.fraction.tokenId;
        if (!fractionToken)
            return res.status(500).json({ error: "Fraction not mapped to tokenId" });
        const totalPrice = BigInt(shardsToBuy) * BigInt(Math.floor(proposal.pricePerShard * 1e18));
        const tx = yield contract.buySellProposal(fractionToken, shardsToBuy, { value: totalPrice });
        yield tx.wait();
        // Update DB
        const updatedProposal = yield db_1.default.sellProposal.update({
            where: { id: proposalId },
            data: { remaining: { decrement: shardsToBuy } },
        });
        // Transfer fractions
        let buyerFraction = yield db_1.default.fraction.findFirst({
            where: { propertyId: proposal.propertyId, walletId: buyerWallet.id },
        });
        if (buyerFraction) {
            yield db_1.default.fraction.update({
                where: { id: buyerFraction.id },
                data: { supply: { increment: shardsToBuy } },
            });
        }
        else {
            buyerFraction = yield db_1.default.fraction.create({
                data: { propertyId: proposal.propertyId, walletId: buyerWallet.id, supply: shardsToBuy, tokenId: fractionToken },
            });
        }
        // Reduce seller fraction supply
        yield db_1.default.fraction.update({
            where: { id: proposal.fractionId },
            data: { supply: { decrement: shardsToBuy } },
        });
        res.status(200).json({
            message: "Purchase successful",
            totalPrice: Number(totalPrice) / 1e18,
            updatedProposal,
            buyerFraction,
            txHash: tx.hash,
        });
    }
    catch (err) {
        console.error("Buy SellProposal error:", err);
        res.status(500).json({ error: "Failed to buy proposal", details: err.message });
    }
});
exports.buySellProposal = buySellProposal;
const getSellProposals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        const proposals = yield db_1.default.sellProposal.findMany({
            skip,
            take: limit,
            include: { fraction: true, property: true },
            orderBy: { createdAt: "desc" },
        });
        const total = yield db_1.default.sellProposal.count();
        res.json({
            proposals,
            pagination: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
                hasNextPage: page * limit < total,
                hasPrevPage: page > 1,
            },
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch sell proposals" });
    }
});
exports.getSellProposals = getSellProposals;
