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
exports.getListings = exports.getFractions = exports.deleteProperty = exports.updateProperty = exports.createProperty = exports.getProperty = exports.getProperties = void 0;
const ethers_1 = require("ethers");
const db_1 = __importDefault(require("../config/db"));
const pinata_1 = require("../utils/pinata");
const PropertyNFT_1 = require("../abi/PropertyNFT");
const provider = new ethers_1.ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers_1.ethers.Wallet(process.env.PRIVATE_KEY, provider);
const contract = new ethers_1.ethers.Contract(process.env.NFT_CONTRACT_ADDRESS, PropertyNFT_1.propertyAbi.abi, wallet);
const getProperties = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;
        const where = req.query.walletAddress
            ? { nftAddress: req.query.walletAddress }
            : {}; // <-- or nftAddress if that's the correct field
        const properties = yield db_1.default.property.findMany({
            take: limit,
            skip,
            where,
            include: {
                owner: {
                    select: { id: true, firstName: true, lastName: true },
                },
            },
            orderBy: { createdAt: "desc" },
        });
        res.json(properties);
    }
    catch (err) {
        console.error(err);
        res.status(500).json({ error: "Failed to fetch properties" });
    }
});
exports.getProperties = getProperties;
const getProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const property = yield db_1.default.property.findUnique({
            where: { id: req.params.id }
        });
        if (!property) {
            return res.status(404).json({ error: 'Property not found' });
        }
        // Ensure ownerId is in the correct format
        const formattedProperty = Object.assign(Object.assign({}, property), { ownerId: property.ownerId.toLowerCase() // Ensure consistent format
         });
        res.json(formattedProperty);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch property' });
    }
});
exports.getProperty = getProperty;
// ✅ Create a property in TTREX
// ✅ Create a property in TTREX
const createProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //@ts-ignore
        const userId = req.userId;
        const file = req.file;
        const { title, description, valuation, address } = req.body;
        if (!file || !title || !description || !valuation || !userId || !address) {
            return res.status(400).json({
                success: false,
                error: "Missing required fields",
            });
        }
        const imageCID = yield (0, pinata_1.uploadFileToPinata)(file);
        const imageUrl = `ipfs://${imageCID}`;
        // Build metadata
        const metadata = {
            name: title,
            description,
            image: imageUrl,
            external_url: imageUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"),
            attributes: [{ trait_type: "Valuation", value: parseFloat(valuation) }],
            properties: {
                files: [{ uri: imageUrl, type: file.mimetype }],
            },
        };
        // Upload metadata to Pinata
        const metadataCID = yield (0, pinata_1.uploadJSONToPinata)(metadata);
        const metadataURI = `ipfs://${metadataCID}`;
        // ✅ Call TTREX contract (createProperty without fractions)
        console.log("Creating property on TTREX...");
        const tx = yield contract.createProperty(metadataURI);
        const receipt = yield tx.wait();
        console.log("Property created at block:", receipt.blockNumber);
        // Get propertyId from event logs
        const event = receipt.logs.find((l) => l.topics[0] === ethers_1.ethers.id("PropertyCreated(uint256,string,address)"));
        //@ts-ignore
        const propertyId = event ? ethers_1.ethers.decodeAbiParameters(["uint256"], event.topics[1])[0].toString() : null;
        // Count existing properties
        const propertyCount = yield db_1.default.property.count();
        // Save new property with dynamic tokenId
        const property = yield db_1.default.property.create({
            data: {
                title,
                description,
                valuation: parseFloat(valuation),
                nftAddress: address,
                tokenId: (propertyCount + 1).toString(), // dynamically set tokenId
                imageUrl,
                status: "VERIFIED",
                owner: {
                    connect: { id: userId }, // Connect to user
                },
            },
        });
        return res.status(201).json({
            success: true,
            property,
            txHash: receipt.hash,
            imageUrl,
            metadataURI,
            propertyId,
        });
    }
    catch (err) {
        console.error("Property creation error:", err);
        return res.status(500).json({
            success: false,
            error: err instanceof Error ? err.message : "Failed to create property in TTREX",
        });
    }
});
exports.createProperty = createProperty;
const updateProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const property = yield db_1.default.property.update({
            where: { id: req.params.id },
            data: req.body
        });
        res.json(property);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to update property' });
    }
});
exports.updateProperty = updateProperty;
const deleteProperty = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.property.delete({ where: { id: req.params.id } });
        res.json({ message: 'Property deleted successfully' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to delete property' });
    }
});
exports.deleteProperty = deleteProperty;
const getFractions = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;
        const fractions = yield db_1.default.fraction.findMany({
            take: limit,
            skip,
            orderBy: { createdAt: 'desc' },
            include: { property: true }
        });
        res.json(fractions);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch fractions' });
    }
});
exports.getFractions = getFractions;
const getListings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 20;
        const skip = (page - 1) * limit;
        const listings = yield db_1.default.listing.findMany({
            take: limit,
            skip,
            orderBy: { createdAt: 'desc' }
        });
        res.json(listings);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch listings' });
    }
});
exports.getListings = getListings;
