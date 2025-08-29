

// controllers/marketplaceController.ts
import { Request, Response } from 'express';
import prisma from '../config/db';


export const createListing = async (req: Request, res: Response) => {
    try {
        const listing = await prisma.listing.create({ data: req.body });
        res.status(201).json(listing);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create listing' });
    }
};


export const getListings = async (req: Request, res: Response) => {
    try {
        const listings = await prisma.listing.findMany();
        res.json(listings);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch listings' });
    }
};


export const getListing = async (req: Request, res: Response) => {
    try {
        const listing = await prisma.listing.findUnique({ where: { id: req.params.id } });
        if (!listing) return res.status(404).json({ error: 'Listing not found' });
        res.json(listing);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch listing' });
    }
};


export const buyListing = async (req: Request, res: Response) => {
    try {
        const { amount, buyerAddress } = req.body;
        const listing = await prisma.listing.findUnique({ where: { id: req.params.id } });
        if (!listing) return res.status(404).json({ error: 'Listing not found' });
        if (listing.amount < amount) return res.status(400).json({ error: 'Not enough fractions available' });
        await prisma.listing.update({
            where: { id: listing.id },
            data: { amount: listing.amount - amount }
        });
        res.json({ message: 'Fractions purchased successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to buy listing' });
    }
};


export const cancelListing = async (req: Request, res: Response) => {
    try {
        await prisma.listing.delete({ where: { id: req.params.id } });
        res.json({ message: 'Listing cancelled successfully' });
    } catch (err) {
        res.status(500).json({ error: 'Failed to cancel listing' });
    }
};