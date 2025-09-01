"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const requireAuth_1 = require("../middlewares/requireAuth");
const propertyController = __importStar(require("../controllers/propertyController"));
const fractionController = __importStar(require("../controllers/fractionController"));
const marketplaceController = __importStar(require("../controllers/marketPlaceController"));
const daoController = __importStar(require("../controllers/daoController"));
const paymentController = __importStar(require("../controllers/paymentController"));
const ipfs_1 = __importDefault(require("./ipfs"));
const sellProposalRoutes = __importStar(require("../controllers/sellController")); // ✅ Import the new routes
const router = (0, express_1.Router)();
const upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
// Property routes with proper middleware
router.get('/properties', propertyController.getProperties);
router.get('/properties/:id', propertyController.getProperty);
router.post('/properties', requireAuth_1.requireAuth, upload.single('file'), propertyController.createProperty);
router.put('/properties/:id', requireAuth_1.requireAuth, propertyController.updateProperty);
router.delete('/properties/:id', requireAuth_1.requireAuth, propertyController.deleteProperty);
// Fraction routes
router.get('/fractions', fractionController.getFractions);
router.post('/properties/:id/fractions/mint', fractionController.mintFractions);
router.post('/properties/:id/fractions/burn', fractionController.burnFractions);
router.post('/properties/:id/fractions/unlock', fractionController.unlockProperty);
router.post('/properties/:id/fractions/transfer', fractionController.transferShards);
router.post('/fractions/sell', sellProposalRoutes.createSellProposal);
// Marketplace / Listing routes
router.get('/listings', marketplaceController.getListings);
router.post('/listings', marketplaceController.createListing);
router.post('/listings/buy', marketplaceController.buyListing);
router.post('/listings/:id/cancel', marketplaceController.cancelListing);
// DAO / Proposal routes
router.get('/properties/:id/proposals', daoController.getProposals);
router.post('/properties/:id/proposals', daoController.createProposal);
router.post('/proposals/:id/vote', daoController.voteProposal);
router.post('/proposals/:id/execute', daoController.executeProposal);
// Payment routes
router.get('/properties/:id/payments', paymentController.getPayments);
router.post('/properties/:id/payments/deposit', paymentController.depositFunds);
router.post('/properties/:id/payments/distribute', paymentController.distributeFunds);
// IPFS upload
router.use("/upload", ipfs_1.default);
// ✅ Mount SellProposal routes
router.post("/sell-proposals", sellProposalRoutes.createSellProposal);
router.get("/sell-proposals", sellProposalRoutes.getSellProposals);
exports.default = router;
