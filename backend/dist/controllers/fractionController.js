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
exports.unlockProperty = exports.transferShards = exports.burnFractions = exports.mintFractions = exports.getFractions = void 0;
const db_1 = __importDefault(require("../config/db"));
const ethers_1 = require("ethers");
const PropertyNFT_1 = require("../abi/PropertyNFT");
const getFractions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;
        // Build the where condition
        const where = Object.assign({ supply: { gt: 0 } }, (req.query.walletAddress
            ? { walletId: req.query.walletAddress } // ✅ matches Wallet.address
            : {}));
        const fractions = yield db_1.default.fraction.findMany({
            take: limit,
            skip,
            where,
            include: {
                property: {
                    select: { id: true, title: true, description: true, imageUrl: true, valuation: true },
                },
                owner: {
                    select: { address: true, user: { select: { firstName: true, lastName: true } } },
                },
            },
            orderBy: { createdAt: "desc" },
        });
        res.json(fractions);
    }
    catch (err) {
        console.error("getFractions error:", err);
        res.status(500).json({ error: "Failed to fetch fractions" });
    }
});
exports.getFractions = getFractions;
// ✅ Setup provider and contract once
const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers_1.ethers.Contract(process.env.NFT_CONTRACT_ADDRESS, PropertyNFT_1.propertyAbi.abi, wallet);
const mintFractions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { address, noOfTokens } = req.body; // Number of fractions to mint
        const { id: propertyId } = req.params; // DB property id
        // 🔹 Validate input
        if (!address) {
            return res.status(400).json({ error: "Owner wallet address is required" });
        }
        if (!noOfTokens || noOfTokens <= 0) {
            return res.status(400).json({ error: "Invalid number of fractions" });
        }
        // 🔹 Fetch property details
        const property = yield db_1.default.property.findUnique({
            where: { id: propertyId },
            select: { valuation: true, tokenId: true }
        });
        if (!property) {
            return res.status(404).json({ error: "Property not found" });
        }
        const { valuation, tokenId } = property;
        // 🔹 Calculate fraction price
        const pricePerFraction = ethers_1.ethers.parseUnits((valuation / noOfTokens).toString(), 18);
        const existingFraction = yield db_1.default.fraction.findFirst({
            where: { propertyId },
        });
        if (existingFraction) {
            return res.status(400).json({ error: "Property already fractionalised" });
        }
        // 🔹 Interact with smart contract
        const tx = yield contract.mintFractions(tokenId, // uint256 propertyId
        address, // address to mint to
        noOfTokens // uint256 amount
        );
        const receipt = yield tx.wait();
        const walletRecord = yield db_1.default.wallet.findUnique({
            where: { address }, // find wallet by blockchain address
        });
        if (!walletRecord) {
            return res.status(404).json({ error: "Wallet not found" });
        }
        const walletId = walletRecord.id;
        // 🔹 Save fraction in DB
        const fraction = yield db_1.default.fraction.create({
            data: {
                propertyId,
                walletId: address,
                supply: noOfTokens,
            },
        });
        yield db_1.default.property.update({
            where: { id: propertyId },
            data: { status: "FRACTIONALISED" }
        });
        // 🔹 Save transaction in DB
        yield db_1.default.transaction.create({
            data: {
                propertyId,
                walletId, // ✅ correct internal ID
                fractionId: fraction.id,
                type: "FRACTIONALISE",
                amount: noOfTokens,
                hash: String(receipt.transactionHash)
            },
        });
        return res.status(201).json({
            message: "Fractions minted successfully",
            fraction,
            txHash: String(receipt.transactionHash),
        });
    }
    catch (err) {
        console.error("Mint fraction error:", err);
        return res.status(500).json({
            error: "Failed to mint fractions",
            details: err.message,
        });
    }
});
exports.mintFractions = mintFractions;
const burnFractions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount } = req.body;
        const { id: propertyId } = req.params;
        // 🔹 Find fraction by property
        const fraction = yield db_1.default.fraction.findFirst({
            where: { propertyId },
        });
        if (!fraction) {
            return res.status(404).json({ error: 'Fraction not found' });
        }
        // 🔹 Update or delete fractions
        const newAmount = fraction.supply - amount;
        if (newAmount <= 0) {
            yield db_1.default.fraction.delete({ where: { id: fraction.id } });
        }
        else {
            yield db_1.default.fraction.update({
                where: { id: fraction.id },
                data: { supply: newAmount }
            });
        }
        res.json({ message: 'Fractions burned successfully' });
    }
    catch (err) {
        console.error("Burn fraction error:", err);
        res.status(500).json({ error: 'Failed to burn fractions' });
    }
});
exports.burnFractions = burnFractions;
// Transfer fraction shards
const transferShards = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fromWalletAddress, toWalletAddress, fractionId, amount } = req.body;
        if (!fromWalletAddress || !toWalletAddress || !fractionId || !amount)
            return res.status(400).json({ error: "Missing required fields" });
        // Fetch fraction and property
        const fraction = yield db_1.default.fraction.findUnique({
            where: { id: fractionId },
            include: { property: true, owner: true },
        });
        if (!fraction)
            return res.status(404).json({ error: "Fraction not found" });
        if (fraction.owner.address !== fromWalletAddress)
            return res.status(403).json({ error: "You do not own this fraction" });
        // Execute ERC1155 transfer
        const tx = yield contract.safeTransferFrom(fromWalletAddress, toWalletAddress, fraction.property.tokenId, // tokenId of property
        amount, "0x");
        yield tx.wait();
        // Update Prisma fraction ownership
        // Subtract from sender
        yield db_1.default.fraction.update({
            where: { id: fractionId },
            data: { supply: fraction.supply - amount },
        });
        // Upsert receiver fraction
        // Fetch sender and receiver wallets by address
        const fromWallet = yield db_1.default.wallet.findUnique({ where: { address: fromWalletAddress } });
        const toWallet = yield db_1.default.wallet.findUnique({ where: { address: toWalletAddress } });
        if (!fromWallet || !toWallet)
            return res.status(404).json({ error: "Wallet not found" });
        // Subtract from sender
        yield db_1.default.fraction.update({
            where: { id: fraction.id },
            data: { supply: fraction.supply - amount },
        });
        // Add to // Add to receiver
        const existingFraction = yield db_1.default.fraction.findFirst({
            where: { walletId: toWallet.address, propertyId: fraction.propertyId },
        });
        console.log(existingFraction);
        if (existingFraction) {
            console.log(existingFraction);
            yield db_1.default.fraction.update({
                where: { id: existingFraction.id },
                data: { supply: existingFraction.supply + amount },
            });
        }
        else {
            yield db_1.default.fraction.create({
                data: {
                    walletId: toWallet.address, // ✅ use address, not id
                    propertyId: fraction.propertyId,
                    supply: amount,
                },
            });
        }
        // Log transaction
        yield db_1.default.transaction.create({
            data: {
                walletId: fromWallet.id, // ✅ correct
                fractionId,
                propertyId: fraction.propertyId,
                type: "SELL",
                amount,
                hash: tx.hash,
            },
        });
        res.json({ success: true, txHash: tx.hash });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Transfer failed" });
    }
});
exports.transferShards = transferShards;
const unlockProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { walletAddress, propertyId } = req.body;
        if (!propertyId || !walletAddress) {
            console.log(propertyId, walletAddress);
            return res.status(400).json({ error: "Missing propertyId or walletAddress" });
        }
        // Fetch property with only fractions having supply > 0
        const property = yield db_1.default.property.findUnique({
            where: { id: propertyId },
            include: {
                fractions: {
                    where: { supply: { gt: 0 } }, // ✅ ignore fractions with 0 supply
                },
                owner: true,
            },
        });
        if (!property)
            return res.status(404).json({ error: "Property not found" });
        // Check that exactly 1 fraction exists after ignoring zero supply
        if (property.fractions.length !== 1) {
            return res.status(400).json({ error: "Property cannot be unlocked: fraction count is not 1" });
        }
        // Call smart contract to unlock property
        const tx = yield contract.unlockProperty(Number(property.tokenId));
        const receipt = yield tx.wait();
        console.log(receipt);
        // Update property status
        yield db_1.default.property.update({
            where: { id: propertyId },
            data: { status: "VERIFIED" },
        });
        // Delete all fractions for the property
        yield db_1.default.fraction.deleteMany({ where: { propertyId } });
        // Log unlock transaction
        // await prisma.transaction.create({
        //   data: {
        //     walletId: walletAddress,
        //     propertyId,
        //     type: "UNLOCK",
        //     amount: 0,
        //     hash: receipt.hash || receipt.transactionHash,
        //   },
        // });
        res.json({ success: true, txHash: receipt.transactionHash });
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to unlock property" });
    }
});
exports.unlockProperty = unlockProperty;
