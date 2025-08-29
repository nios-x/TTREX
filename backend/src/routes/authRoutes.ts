import { Router } from "express";
import { forgotPassword, resetPassword } from "../controllers/authController";
import { startRegistration, verifyRegistration, login } from "../controllers/authController";

const router = Router();

router.post("/register/start", startRegistration);
router.post("/register/verify", verifyRegistration);
router.post("/login", login);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);


export default router;
