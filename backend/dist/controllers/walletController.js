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
exports.upsert = void 0;
const db_1 = __importDefault(require("../config/db"));
const upsert = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("first");
    try {
        const { address } = req.body;
        const userID = req.userId;
        const userId = typeof userID === "string" ? userID : null;
        if (!address) {
            return res.status(400).json({ error: "Address is required" });
        }
        if (!userId) {
            return res.status(400).json({ error: "UserId is required" });
        }
        let wallet = yield db_1.default.wallet.findFirst({
            where: { userId, address },
        });
        if (!wallet) {
            wallet = yield db_1.default.wallet.create({
                data: { address, userId },
            });
        }
        return res.json(wallet);
    }
    catch (err) {
        console.error("Wallet upsert failed:", err);
        return res.status(500).json({ error: "Failed to upsert wallet" });
    }
});
exports.upsert = upsert;
