import { Request, Response } from 'express';
import prisma from '../config/db';

export const upsert = async (req: any, res: Response) => {
    console.log("first")
    try {
        const { address } = req.body;
        const userID = req.userId;
        const userId = typeof userID === "string" ? userID : null;
        if (!address) {
            return res.status(400).json({ error: "Address is required" });
        }
        if (!userId) {
            return res.status(400).json({ error: "UserId is required" });
        } let wallet = await prisma.wallet.findFirst({
            where: { userId, address },
        });

        if (!wallet) {
            wallet = await prisma.wallet.create({
                data: { address, userId },
            });
        }
        return res.json(wallet);
    } catch (err) {
        console.error("Wallet upsert failed:", err);
        return res.status(500).json({ error: "Failed to upsert wallet" });
    }
};

