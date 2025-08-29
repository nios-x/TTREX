// controllers/fractionController.ts
import { Request, Response } from 'express';
import prisma from '../config/db';
import { ethers } from "ethers";
import { propertyAbi } from "../abi/PropertyNFT";

export const getFractions = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;

    // Build the where condition
    const where: any = {
      supply: { gt: 0 },
      ...(req.query.walletAddress
        ? { walletId: req.query.walletAddress as string } // ✅ matches Wallet.address
        : {}),
    };

    const fractions = await prisma.fraction.findMany({
      take: limit,
      skip,
      where,
      include: {
        property: {
          select: { id: true, title: true },
        },
        owner: {
          select: { address: true, user: { select: { firstName: true, lastName: true } } },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(fractions);
  } catch (err) {
    console.error("getFractions error:", err);
    res.status(500).json({ error: "Failed to fetch fractions" });
  }
};



// ✅ Setup provider and contract once
const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const contract = new ethers.Contract(
  process.env.NFT_CONTRACT_ADDRESS!,
  propertyAbi.abi,
  wallet
);

export const mintFractions = async (req: Request, res: Response) => {
  try {
    const { address, noOfTokens } = req.body; // Number of fractions to mint
    const { id: propertyId } = req.params;    // DB property id

    // 🔹 Validate input
    if (!address) {
      return res.status(400).json({ error: "Owner wallet address is required" });
    }
    if (!noOfTokens || noOfTokens <= 0) {
      return res.status(400).json({ error: "Invalid number of fractions" });
    }

    // 🔹 Fetch property details
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      select: { valuation: true, tokenId: true }
    });

    if (!property) {
      return res.status(404).json({ error: "Property not found" });
    }

    const { valuation, tokenId } = property;

    // 🔹 Calculate fraction price
    const pricePerFraction = ethers.parseUnits(
      (valuation / noOfTokens).toString(),
      18
    );
    const existingFraction = await prisma.fraction.findFirst({
      where: { propertyId },
    });

    if (existingFraction) {
      return res.status(400).json({ error: "Property already fractionalised" });
    }

    // 🔹 Interact with smart contract
    const tx = await contract.mintFractions(
      tokenId,    // uint256 propertyId
      address,    // address to mint to
      noOfTokens  // uint256 amount
    );

    const receipt = await tx.wait();
    const walletRecord = await prisma.wallet.findUnique({
      where: { address }, // find wallet by blockchain address
    });

    if (!walletRecord) {
      return res.status(404).json({ error: "Wallet not found" });
    }

    const walletId = walletRecord.id;
    // 🔹 Save fraction in DB
    const fraction = await prisma.fraction.create({
      data: {
        propertyId,
        walletId: address,
        supply: noOfTokens,
      },
    });


    await prisma.property.update({
      where: { id: propertyId },
      data: { status: "FRACTIONALISED" }
    });

    // 🔹 Save transaction in DB
    await prisma.transaction.create({
      data: {
        propertyId,
        walletId,       // ✅ correct internal ID
        fractionId: fraction.id,
        type: "FRACTIONALISE",
        amount: noOfTokens,
        hash: String(receipt.transactionHash)
      },
    });


    return res.status(201).json({
      message: "Fractions minted successfully",
      fraction,
      txHash: String(receipt.transactionHash),
    });
  } catch (err: any) {
    console.error("Mint fraction error:", err);
    return res.status(500).json({
      error: "Failed to mint fractions",
      details: err.message,
    });
  }
};

export const burnFractions = async (req: Request, res: Response) => {
  try {
    const { amount } = req.body;
    const { id: propertyId } = req.params;

    // 🔹 Find fraction by property
    const fraction = await prisma.fraction.findFirst({
      where: { propertyId },
    });

    if (!fraction) {
      return res.status(404).json({ error: 'Fraction not found' });
    }

    // 🔹 Update or delete fractions
    const newAmount = fraction.supply - amount;
    if (newAmount <= 0) {
      await prisma.fraction.delete({ where: { id: fraction.id } });
    } else {
      await prisma.fraction.update({
        where: { id: fraction.id },
        data: { supply: newAmount }
      });
    }

    res.json({ message: 'Fractions burned successfully' });
  } catch (err: any) {
    console.error("Burn fraction error:", err);
    res.status(500).json({ error: 'Failed to burn fractions' });
  }
};


// Transfer fraction shards
export const transferShards = async (req: Request, res: Response) => {
  
  try {
    const { fromWalletAddress, toWalletAddress, fractionId, amount } = req.body;

    if (!fromWalletAddress || !toWalletAddress || !fractionId || !amount)
      return res.status(400).json({ error: "Missing required fields" });

    // Fetch fraction and property
    const fraction = await prisma.fraction.findUnique({
      where: { id: fractionId },
      include: { property: true, owner: true },
    });
    if (!fraction) return res.status(404).json({ error: "Fraction not found" });

    if (fraction.owner.address !== fromWalletAddress)
      return res.status(403).json({ error: "You do not own this fraction" });

    // Execute ERC1155 transfer
    const tx = await contract.safeTransferFrom(
      fromWalletAddress,
      toWalletAddress,
      fraction.property.tokenId, // tokenId of property
      amount,
      "0x"
    );
    await tx.wait();

    // Update Prisma fraction ownership
    // Subtract from sender
    await prisma.fraction.update({
      where: { id: fractionId },
      data: { supply: fraction.supply - amount },
    });

    // Upsert receiver fraction
   // Fetch sender and receiver wallets by address
const fromWallet = await prisma.wallet.findUnique({ where: { address: fromWalletAddress } });
const toWallet = await prisma.wallet.findUnique({ where: { address: toWalletAddress } });

if (!fromWallet || !toWallet) return res.status(404).json({ error: "Wallet not found" });

// Subtract from sender
await prisma.fraction.update({
  where: { id: fraction.id },
  data: { supply: fraction.supply - amount },
});

// Add to // Add to receiver
const existingFraction = await prisma.fraction.findFirst({
  where: { walletId: toWallet.address, propertyId: fraction.propertyId },
});
  console.log(existingFraction)
if (existingFraction) {
  console.log(existingFraction)
  await prisma.fraction.update({
    where: { id: existingFraction.id },
    data: { supply: existingFraction.supply + amount },
  });
} else {
  await prisma.fraction.create({
    data: {
      walletId: toWallet.address, // ✅ use address, not id
      propertyId: fraction.propertyId,
      supply: amount,
    },
  });
}


    // Log transaction
    await prisma.transaction.create({
  data: {
    walletId: fromWallet.id, // ✅ correct
    fractionId,
    propertyId: fraction.propertyId,
    type: "SELL",
    amount,
    hash: tx.hash,
  },
});

    res.json({ success: true, txHash: tx.hash });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Transfer failed" });
  }
};


export const unlockProperty = async (req: Request, res: Response) => { 
  try {
    const { walletAddress, propertyId } = req.body;

    if (!propertyId || !walletAddress) {
      console.log(propertyId, walletAddress);
      return res.status(400).json({ error: "Missing propertyId or walletAddress" });
    }

    // Fetch property with only fractions having supply > 0
    const property = await prisma.property.findUnique({
      where: { id: propertyId },
      include: {
        fractions: {
          where: { supply: { gt: 0 } }, // ✅ ignore fractions with 0 supply
        },
        owner: true,
      },
    });

    if (!property) return res.status(404).json({ error: "Property not found" });

    // Check that exactly 1 fraction exists after ignoring zero supply
    if (property.fractions.length !== 1) {
      return res.status(400).json({ error: "Property cannot be unlocked: fraction count is not 1" });
    }

    // Call smart contract to unlock property
    const tx = await contract.unlockProperty(Number(property.tokenId));
    const receipt = await tx.wait();
    console.log(receipt);

    // Update property status
    await prisma.property.update({
      where: { id: propertyId },
      data: { status: "VERIFIED" },
    });

    // Delete all fractions for the property
    await prisma.fraction.deleteMany({ where: { propertyId } });

    // Log unlock transaction
    // await prisma.transaction.create({
    //   data: {
    //     walletId: walletAddress,
    //     propertyId,
    //     type: "UNLOCK",
    //     amount: 0,
    //     hash: receipt.hash || receipt.transactionHash,
    //   },
    // });

    res.json({ success: true, txHash: receipt.transactionHash });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to unlock property" });
  }
};
