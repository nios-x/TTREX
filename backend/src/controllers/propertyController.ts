import { Request, Response } from 'express';
import { ethers } from "ethers";
import prisma from '../config/db';
import { uploadFileToPinata, uploadJSONToPinata } from "../utils/pinata";
import { propertyAbi } from "../abi/PropertyNFT";

const provider = new ethers.JsonRpcProvider(process.env.RPC_URL);
const wallet = new ethers.Wallet(process.env.PRIVATE_KEY!, provider);
const contract = new ethers.Contract(process.env.NFT_CONTRACT_ADDRESS!, propertyAbi.abi, wallet);



export const getProperties = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;

    const where = req.query.walletAddress
      ? { nftAddress: req.query.walletAddress as string }
      : {}; // <-- or nftAddress if that's the correct field

    const properties = await prisma.property.findMany({
      take: limit,
      skip,
      where,
      include: {
        owner: {
          select: { id: true, firstName: true, lastName: true },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch properties" });
  }
};


export const getProperty = async (req: Request, res: Response) => {
  try {
    const property = await prisma.property.findUnique({
      where: { id: req.params.id }
    });

    if (!property) {
      return res.status(404).json({ error: 'Property not found' });
    }

    // Ensure ownerId is in the correct format
    const formattedProperty = {
      ...property,
      ownerId: property.ownerId.toLowerCase() // Ensure consistent format
    };

    res.json(formattedProperty);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch property' });
  }
};




// ✅ Create a property in TTREX
// ✅ Create a property in TTREX
export const createProperty = async (req: Request, res: Response) => {
  try {
    //@ts-ignore
    const userId = req.userId;
    const file = req.file;
    const { title, description, valuation, address } = req.body;

    if (!file || !title || !description || !valuation || !userId || !address) {
      return res.status(400).json({
        success: false,
        error: "Missing required fields",
      });
    }

    const imageCID = await uploadFileToPinata(file);
    const imageUrl = `ipfs://${imageCID}`;

    // Build metadata
    const metadata = {
      name: title,
      description,
      image: imageUrl,
      external_url: imageUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/"),
      attributes: [{ trait_type: "Valuation", value: parseFloat(valuation) }],
      properties: {
        files: [{ uri: imageUrl, type: file.mimetype }],
      },
    };

    // Upload metadata to Pinata
    const metadataCID = await uploadJSONToPinata(metadata);
    const metadataURI = `ipfs://${metadataCID}`;

    // ✅ Call TTREX contract (createProperty without fractions)
    console.log("Creating property on TTREX...");
    const tx = await contract.createProperty(metadataURI);
    const receipt = await tx.wait();
    console.log("Property created at block:", receipt.blockNumber);

    // Get propertyId from event logs
    const event = receipt.logs.find(
      (l: any) => l.topics[0] === ethers.id("PropertyCreated(uint256,string,address)")
    );
    //@ts-ignore
    const propertyId = event ? ethers.decodeAbiParameters(["uint256"], event.topics[1])[0].toString() : null;
    // Count existing properties
    const propertyCount = await prisma.property.count();

    // Save new property with dynamic tokenId
    const property = await prisma.property.create({
      data: {
        title,
        description,
        valuation: parseFloat(valuation),
        nftAddress: address,
        tokenId: (propertyCount + 1).toString(), // dynamically set tokenId
        imageUrl,
        status: "VERIFIED",
        owner: {
          connect: { id: userId }, // Connect to user
        },
      },
    });


    return res.status(201).json({
      success: true,
      property,
      txHash: receipt.hash,
      imageUrl,
      metadataURI,
      propertyId,
    });
  } catch (err) {
    console.error("Property creation error:", err);
    return res.status(500).json({
      success: false,
      error:
        err instanceof Error ? err.message : "Failed to create property in TTREX",
    });
  }
};



export const updateProperty = async (req: Request, res: Response) => {
  try {
    const property = await prisma.property.update({
      where: { id: req.params.id },
      data: req.body
    });
    res.json(property);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update property' });
  }
};


export const deleteProperty = async (req: Request, res: Response) => {
  try {
    await prisma.property.delete({ where: { id: req.params.id } });
    res.json({ message: 'Property deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete property' });
  }
};


export const getFractions = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;

    const fractions = await prisma.fraction.findMany({
      take: limit,
      skip,
      orderBy: { createdAt: 'desc' },
      include: { property: true }
    });

    res.json(fractions);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch fractions' });
  }
};


export const getListings = async (req: Request, res: Response) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 20;
    const skip = (page - 1) * limit;

    const listings = await prisma.listing.findMany({
      take: limit,
      skip,
      orderBy: { createdAt: 'desc' }
    });

    res.json(listings);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch listings' });
  }
};
