import { Request, Response } from 'express';
import  prisma  from '../config/db';


export const getProposals = async (req: Request, res: Response) => {
    try {
        const proposals = await prisma.proposal.findMany({ where: { propertyId: req.params.id } });
        res.json(proposals);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch proposals' });
    }
};


export const createProposal = async (req: Request, res: Response) => {
    try {
        const { creatorId, title, description } = req.body;
        const proposal = await prisma.proposal.create({
            data: { propertyId: req.params.id, creatorId, title, description }
        });
        res.status(201).json(proposal);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create proposal' });
    }
};


export const voteProposal = async (req: Request, res: Response) => {
    try {
        const { voterAddress, vote } = req.body;
        const proposal = await prisma.proposal.findUnique({ where: { id: req.params.id } });
        if (!proposal) return res.status(404).json({ error: 'Proposal not found' });


        const votes = proposal.votes as { voterAddress: string; vote: string }[];
        votes.push({ voterAddress, vote });


        await prisma.proposal.update({ where: { id: proposal.id }, data: { votes } });
        res.json({ message: 'Vote recorded' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to vote' });
    }
};


export const executeProposal = async (req: Request, res: Response) => {
    try {
        await prisma.proposal.update({ where: { id: req.params.id }, data: { executed: true } });
        res.json({ message: 'Proposal executed successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to execute proposal' });
    }
};