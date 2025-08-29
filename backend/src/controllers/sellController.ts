// controllers/sellProposalController.ts
import { Request, Response } from "express";
import prisma from "../config/db";

export const createSellProposal = async (req: Request, res: Response) => {
  try {
    const { walletAddress, fractionId, shardsForSale, pricePerShard } = req.body;

    if (!walletAddress || !fractionId || !shardsForSale || !pricePerShard) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Fetch wallet
    const wallet = await prisma.wallet.findUnique({ where: { address: walletAddress } });
    if (!wallet) return res.status(404).json({ error: "Wallet not found" });

    // Fetch fraction
    const fraction = await prisma.fraction.findUnique({ where: { id: fractionId } });
    if (!fraction) return res.status(404).json({ error: "Fraction not found" });

    if (shardsForSale > fraction.supply) {
      return res.status(400).json({ error: "Cannot sell more shards than owned" });
    }

    // Create SellProposal
    const proposal = await prisma.sellProposal.create({
      data: {
        propertyId: fraction.propertyId,
        fractionId: fraction.id,
        creatorWallet: wallet.address,
        shardsForSale,
        remaining: shardsForSale,
        pricePerShard,
      },
    });

    res.status(201).json({ message: "Sell proposal created", proposal });
  } catch (err: any) {
    console.error("Create SellProposal error:", err);
    res.status(500).json({ error: "Failed to create proposal", details: err.message });
  }
};

// ✅ Get all proposals
export const getSellProposals = async (req: Request, res: Response) => {
  try {
    const proposals = await prisma.sellProposal.findMany({
      include: {
        fraction: true,
        property: true,
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(proposals);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch sell proposals" });
  }
};
