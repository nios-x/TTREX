import express from "express";
import multer from "multer";

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Remove the /create-nft endpoint as it's moving to the controller

export default router;
