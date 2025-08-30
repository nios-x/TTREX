import { Request, Response } from "express";
import  prisma from "../config/db";
export const createSellProposal = async (req: Request, res: Response) => {
  const { fractionId, shardsForSale, pricePerShard } = req.body;
  const sellerWalletAddress = req.body.walletAddress;

  if (!fractionId || !shardsForSale || !pricePerShard || !sellerWalletAddress)
    return res.status(400).json({ error: "Missing fields" });

  const fraction = await prisma.fraction.findUnique({ where: { id: fractionId } });
  if (!fraction) return res.status(404).json({ error: "Fraction not found" });
  if (fraction.supply < shardsForSale)
    return res.status(400).json({ error: "Not enough shards to sell" });

  const sellProposal = await prisma.sellProposal.create({
    data: {
      fractionId,
      propertyId: fraction.propertyId,
      walletId: sellerWalletAddress,
      shardsForSale,
      remaining: shardsForSale,
      pricePerShard,
    },
  });

  res.json({ success: true, sellProposal });
};
export const buyShards = async (req: Request, res: Response) => {
  const { buyerWalletAddress, sellProposalId, quantity, offeredPrice } = req.body;

  const sellProposal = await prisma.sellProposal.findUnique({
    where: { id: sellProposalId },
    include: { fraction: true, property: true },
  });

  if (!sellProposal || sellProposal.executed)
    return res.status(404).json({ error: "Proposal not found or sold out" });

  if (quantity > sellProposal.remaining)
    return res.status(400).json({ error: "Not enough shards left" });

  if (offeredPrice !== sellProposal.pricePerShard)
    return res.status(400).json({ error: "Price does not match seller's set price" });

  // Transfer shards on-chain via ERC1155
  const tx = await contract.safeTransferFrom(
    sellProposal.walletId, // seller
    buyerWalletAddress,    // buyer
    sellProposal.fraction.property.tokenId,
    quantity,
    "0x"
  );
  await tx.wait();

  // Update seller fraction
  await prisma.fraction.update({
    where: { id: sellProposal.fractionId },
    data: { supply: sellProposal.fraction.supply - quantity },
  });

  // Update or create buyer fraction
  const existingFraction = await prisma.fraction.findFirst({
    where: { walletId: buyerWalletAddress, propertyId: sellProposal.propertyId },
  });

  if (existingFraction) {
    await prisma.fraction.update({
      where: { id: existingFraction.id },
      data: { supply: existingFraction.supply + quantity },
    });
  } else {
    await prisma.fraction.create({
      data: {
        walletId: buyerWalletAddress,
        propertyId: sellProposal.propertyId,
        supply: quantity,
      },
    });
  }

  // Update remaining & executed flag
  const remaining = sellProposal.remaining - quantity;
  await prisma.sellProposal.update({
    where: { id: sellProposalId },
    data: { remaining, executed: remaining === 0 },
  });

  res.json({ success: true, txHash: tx.hash });
};
