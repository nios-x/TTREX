import { Router } from 'express';
import multer from 'multer';
import { requireAuth } from '../middlewares/requireAuth';
import * as propertyController from '../controllers/propertyController';
import * as fractionController from '../controllers/fractionController';
import * as marketplaceController from '../controllers/marketPlaceController';
import * as daoController from '../controllers/daoController';
import * as paymentController from '../controllers/paymentController';
import uploadRouter from "./ipfs";
import * as sellProposalRoutes from '../controllers/sellController'; // ✅ Import the new routes
const router = Router();
const upload = multer({ storage: multer.memoryStorage() });

// Property routes with proper middleware
router.get('/properties', propertyController.getProperties);
router.get('/properties/:id', propertyController.getProperty);
router.post(
  '/properties', 
  requireAuth, 
  upload.single('file'),
  propertyController.createProperty
);
router.put(
  '/properties/:id', 
  requireAuth,
  propertyController.updateProperty
);
router.delete(
  '/properties/:id', 
  requireAuth,
  propertyController.deleteProperty
);

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
router.use("/upload", uploadRouter);

// ✅ Mount SellProposal routes
router.use("/sell-proposals", sellProposalRoutes.createSellProposal);

export default router;
