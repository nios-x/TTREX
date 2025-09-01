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
exports.cancelListing = exports.buyListing = exports.getListing = exports.getListings = exports.createListing = void 0;
const db_1 = __importDefault(require("../config/db"));
const createListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listing = yield db_1.default.listing.create({ data: req.body });
        res.status(201).json(listing);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create listing' });
    }
});
exports.createListing = createListing;
const getListings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listings = yield db_1.default.listing.findMany();
        res.json(listings);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch listings' });
    }
});
exports.getListings = getListings;
const getListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const listing = yield db_1.default.listing.findUnique({ where: { id: req.params.id } });
        if (!listing)
            return res.status(404).json({ error: 'Listing not found' });
        res.json(listing);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch listing' });
    }
});
exports.getListing = getListing;
const buyListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { amount, buyerAddress } = req.body;
        const listing = yield db_1.default.listing.findUnique({ where: { id: req.params.id } });
        if (!listing)
            return res.status(404).json({ error: 'Listing not found' });
        if (listing.amount < amount)
            return res.status(400).json({ error: 'Not enough fractions available' });
        yield db_1.default.listing.update({
            where: { id: listing.id },
            data: { amount: listing.amount - amount }
        });
        res.json({ message: 'Fractions purchased successfully' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to buy listing' });
    }
});
exports.buyListing = buyListing;
const cancelListing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.listing.delete({ where: { id: req.params.id } });
        res.json({ message: 'Listing cancelled successfully' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to cancel listing' });
    }
});
exports.cancelListing = cancelListing;
