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
exports.distributeFunds = exports.depositFunds = exports.getPayments = void 0;
const db_1 = __importDefault(require("../config/db"));
const getPayments = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const payments = yield db_1.default.payment.findMany({ where: { propertyId: req.params.id } });
        res.json(payments);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch payments' });
    }
});
exports.getPayments = getPayments;
const depositFunds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { fromAddress, amount } = req.body;
        //@ts-ignore
        const payment = yield db_1.default.payment.create({ data: { propertyId: req.params.id, fromAddress, amount } });
        res.status(201).json(payment);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to deposit funds' });
    }
});
exports.depositFunds = depositFunds;
const distributeFunds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.payment.updateMany({ where: { propertyId: req.params.id, distributed: false }, data: { distributed: true } });
        res.json({ message: 'Funds distributed' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to distribute funds' });
    }
});
exports.distributeFunds = distributeFunds;
