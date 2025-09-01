import { Request, Response } from "express";
import prisma from "../config/db";
import { ethers } from "ethers";
import { propertyAbi } from "../abi/PropertyNFT";

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const signer = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const contract = new ethers.Contract(process.env.NFT_CONTRACT_ADDRESS!, propertyAbi.abi, signer);




export const createSellProposal = async (req: Request, res: Response) => {
  try {
    const { walletAddress, fractionId, shardsForSale, pricePerShard } = req.body;

    if (!walletAddress || !fractionId || !shardsForSale || !pricePerShard) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const fraction = await prisma.fraction.findUnique({
      where: { id: fractionId },
      include: { property: true },
    });

    if (!fraction) return res.status(404).json({ error: "Fraction not found" });
    if (shardsForSale > fraction.supply) {
      return res.status(400).json({ error: "Cannot sell more shards than owned" });
    }

    // Update fraction supply
    await prisma.fraction.update({
      where: { id: fractionId },
      data: { supply: { decrement: shardsForSale } },
    });

    // Ensure numeric token IDs exist
    const propertyToken = fraction.property.tokenId;
    const fractionToken = fraction.tokenId;
    if (!propertyToken || !fractionToken) {
      return res.status(500).json({ error: "Property or Fraction not mapped to tokenId" });
    }

    // Call on-chain contract
    const tx = await contract.createSellProposal(propertyToken, fractionToken, shardsForSale, ethers.parseEther(pricePerShard.toString()));
    const receipt = await tx.wait();

    const event = receipt.events?.find((e: any) => e.event === "SellProposalCreated");
    const proposalId = event?.args?.proposalId.toNumber();

    const proposal = await prisma.sellProposal.create({
      data: {
        id: proposalId.toString(),
        propertyId: fraction.propertyId,
        fractionId: fraction.id,
        walletId: walletAddress,
        shardsForSale,
        remaining: shardsForSale,
        pricePerShard,
      },
    });

    res.status(201).json({ message: "Sell proposal created", proposal, txHash: tx.hash });
  } catch (err: any) {
    console.error("Create SellProposal error:", err);
    res.status(500).json({ error: "Failed to create proposal", details: err.message });
  }
};

export const buySellProposal = async (req: Request, res: Response) => {
  try {
    const { buyerWalletAddress, proposalId, shardsToBuy } = req.body;
    if (!buyerWalletAddress || !proposalId || !shardsToBuy) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const buyerWallet = await prisma.wallet.findUnique({ where: { address: buyerWalletAddress } });
    if (!buyerWallet) return res.status(404).json({ error: "Buyer wallet not found" });

    const proposal = await prisma.sellProposal.findUnique({
      where: { id: proposalId },
      include: { fraction: { include: { property: true } } },
    });
    if (!proposal) return res.status(404).json({ error: "Sell proposal not found" });
    if (proposal.remaining < shardsToBuy) {
      return res.status(400).json({ error: "Not enough shards available" });
    }

    // Use numeric fraction token
    const fractionToken = proposal.fraction.tokenId;
    if (!fractionToken) return res.status(500).json({ error: "Fraction not mapped to tokenId" });

    const totalPrice = BigInt(shardsToBuy) * BigInt(Math.floor(proposal.pricePerShard * 1e18));

    const tx = await contract.buySellProposal(fractionToken, shardsToBuy, { value: totalPrice });
    await tx.wait();

    // Update DB
    const updatedProposal = await prisma.sellProposal.update({
      where: { id: proposalId },
      data: { remaining: { decrement: shardsToBuy } },
    });

    // Transfer fractions
    let buyerFraction = await prisma.fraction.findFirst({
      where: { propertyId: proposal.propertyId, walletId: buyerWallet.id },
    });

    if (buyerFraction) {
      await prisma.fraction.update({
        where: { id: buyerFraction.id },
        data: { supply: { increment: shardsToBuy } },
      });
    } else {
      buyerFraction = await prisma.fraction.create({
        data: { propertyId: proposal.propertyId, walletId: buyerWallet.id, supply: shardsToBuy, tokenId: fractionToken },
      });
    }

    // Reduce seller fraction supply
    await prisma.fraction.update({
      where: { id: proposal.fractionId },
      data: { supply: { decrement: shardsToBuy } },
    });

    res.status(200).json({
      message: "Purchase successful",
      totalPrice: Number(totalPrice) / 1e18,
      updatedProposal,
      buyerFraction,
      txHash: tx.hash,
    });
  } catch (err: any) {
    console.error("Buy SellProposal error:", err);
    res.status(500).json({ error: "Failed to buy proposal", details: err.message });
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
      include: { fraction: true, property: true },
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
