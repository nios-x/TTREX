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
exports.executeProposal = exports.voteProposal = exports.createProposal = exports.getProposals = void 0;
const db_1 = __importDefault(require("../config/db"));
const getProposals = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proposals = yield db_1.default.proposal.findMany({ where: { propertyId: req.params.id } });
        res.json(proposals);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to fetch proposals' });
    }
});
exports.getProposals = getProposals;
const createProposal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { creatorId, title, description } = req.body;
        const proposal = yield db_1.default.proposal.create({
            data: { propertyId: req.params.id, creatorId, title, description }
        });
        res.status(201).json(proposal);
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to create proposal' });
    }
});
exports.createProposal = createProposal;
const voteProposal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { voterAddress, vote } = req.body;
        const proposal = yield db_1.default.proposal.findUnique({ where: { id: req.params.id } });
        if (!proposal)
            return res.status(404).json({ error: 'Proposal not found' });
        const votes = proposal.votes;
        votes.push({ voterAddress, vote });
        yield db_1.default.proposal.update({ where: { id: proposal.id }, data: { votes } });
        res.json({ message: 'Vote recorded' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to vote' });
    }
});
exports.voteProposal = voteProposal;
const executeProposal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield db_1.default.proposal.update({ where: { id: req.params.id }, data: { executed: true } });
        res.json({ message: 'Proposal executed successfully' });
    }
    catch (err) {
        res.status(500).json({ error: 'Failed to execute proposal' });
    }
});
exports.executeProposal = executeProposal;
