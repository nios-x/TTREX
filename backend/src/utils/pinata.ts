import axios from "axios";
import FormData from "form-data";

const PINATA_API_KEY = process.env.PINATA_API_KEY!;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET!;

export async function uploadFileToPinata(file: Express.Multer.File) {
  const form = new FormData();
  
  // Add file metadata for better IPFS handling
  const pinataMetadata = JSON.stringify({
    name: file.originalname,
    keyvalues: {
      contentType: file.mimetype
    }
  });

  // Add file with proper content type
  form.append("file", file.buffer, {
    filename: file.originalname,
    contentType: file.mimetype
  });
  
  // Add metadata
  form.append("pinataMetadata", pinataMetadata);

  // Add Pinata options for better compatibility
  const pinataOptions = JSON.stringify({
    cidVersion: 1,
    wrapWithDirectory: false
  });
  form.append("pinataOptions", pinataOptions);

  const res = await axios.post(
    "https://api.pinata.cloud/pinning/pinFileToIPFS", 
    form, 
    {
      maxBodyLength: Infinity,
      headers: {
        "Content-Type": `multipart/form-data; boundary=${form.getBoundary()}`,
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_API_SECRET,
      },
    }
  );

  if (!res.data.IpfsHash) {
    throw new Error("Failed to upload file to IPFS");
  }

  return res.data.IpfsHash;
}

export async function uploadJSONToPinata(json: object) {
  // Don't wrap the metadata in pinataContent
  const res = await axios.post(
    "https://api.pinata.cloud/pinning/pinJSONToIPFS",
    json,
    {
      headers: {
        "Content-Type": "application/json",
        pinata_api_key: PINATA_API_KEY,
        pinata_secret_api_key: PINATA_API_SECRET,
      },
    }
  );

  if (!res.data.IpfsHash) {
    throw new Error("Failed to upload metadata to IPFS");
  }

  return res.data.IpfsHash;
}
