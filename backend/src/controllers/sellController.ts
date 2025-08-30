// controllers/sellProposalController.ts
import { Request, Response } from "express";
import prisma from "../config/db";

export const createSellProposal = async (req: Request, res: Response) => {
  try {
    const { walletAddress, fractionId, shardsForSale, pricePerShard } = req.body;

    if (!walletAddress || !fractionId || !shardsForSale || !pricePerShard) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const wallet = await prisma.wallet.findUnique({ where: { address: walletAddress } });
    if (!wallet) return res.status(404).json({ error: "Wallet not found" });
    const fraction = await prisma.fraction.findUnique({ where: { id: fractionId } });
    if (!fraction) return res.status(404).json({ error: "Fraction not found" });

    if (shardsForSale > fraction.supply) {
      return res.status(400).json({ error: "Cannot sell more shards than owned" });
    }

    await prisma.fraction.update({
      where: { id: fractionId },
      data: {
        supply: {
          decrement: shardsForSale, // reduce available supply
        },
      },
    });

    // ✅ Create proposal
    const proposal = await prisma.sellProposal.create({
      data: {
        propertyId: fraction.propertyId,
        fractionId: fraction.id,
        walletId: wallet.id,
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
export const getSellProposals = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;
    const skip = (page - 1) * limit;
    const proposals = await prisma.sellProposal.findMany({
      skip,
      take: limit,
      include: {
        fraction: true,
        property: true,
      },
      orderBy: { createdAt: "desc" },
    });
    const total = await prisma.sellProposal.count();
    res.json({
      proposals,
      pagination: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPrevPage: page > 1,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch sell proposals" });
  }
};


export const buySellProposal = async (req: Request, res: Response) => {
  try {
    const { buyerWalletAddress, proposalId, shardsToBuy } = req.body;

    if (!buyerWalletAddress || !proposalId || !shardsToBuy) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Fetch buyer wallet
    const buyerWallet = await prisma.wallet.findUnique({
      where: { address: buyerWalletAddress },
    });
    if (!buyerWallet) return res.status(404).json({ error: "Buyer wallet not found" });

    // Fetch proposal
    const proposal = await prisma.sellProposal.findUnique({
      where: { id: proposalId },
      include: { fraction: true },
    });
    if (!proposal) return res.status(404).json({ error: "Sell proposal not found" });

    if (proposal.remaining < shardsToBuy) {
      return res.status(400).json({ error: "Not enough shards available in proposal" });
    }

    // Calculate total price
    const totalPrice = shardsToBuy * proposal.pricePerShard;

    // ✅ (Future: verify ETH transaction via blockchain here)

    // Decrement seller's proposal remaining shards
    const updatedProposal = await prisma.sellProposal.update({
      where: { id: proposal.id },
      data: {
        remaining: { decrement: shardsToBuy },
      },
    });

    // ✅ Transfer shards to buyer (increase fraction supply for buyer)
    let buyerFraction = await prisma.fraction.findFirst({
      where: {
        propertyId: proposal.propertyId,
        walletId: buyerWallet.id,
      },
    });

    if (buyerFraction) {
      // Already has some shards → increase supply
      await prisma.fraction.update({
        where: { id: buyerFraction.id },
        data: { supply: { increment: shardsToBuy } },
      });
    } else {
      // First time buyer → create fraction record
      buyerFraction = await prisma.fraction.create({
        data: {
          propertyId: proposal.propertyId,
          walletId: buyerWallet.id,
          supply: shardsToBuy,
        },
      });
    }

    // ✅ Decrease seller's fraction supply
    await prisma.fraction.update({
      where: { id: proposal.fractionId },
      data: { supply: { decrement: shardsToBuy } },
    });

    res.status(200).json({
      message: "Purchase successful",
      totalPrice,
      updatedProposal,
      buyerFraction,
    });
  } catch (err: any) {
    console.error("Buy SellProposal error:", err);
    res.status(500).json({ error: "Failed to buy proposal", details: err.message });
  }
};
