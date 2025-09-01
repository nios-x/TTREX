"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/index.ts
const express_1 = require("express");
const walletController_1 = require("../controllers/walletController");
const router = (0, express_1.Router)();
router.post('/upsert', walletController_1.upsert);
exports.default = router;
