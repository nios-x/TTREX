// routes/index.ts
import { Router } from 'express';
import { upsert } from '../controllers/walletController';
const router = Router();
router.post('/upsert', upsert);
export default router;