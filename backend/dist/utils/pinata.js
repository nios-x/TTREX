"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFileToPinata = uploadFileToPinata;
exports.uploadJSONToPinata = uploadJSONToPinata;
const axios_1 = __importDefault(require("axios"));
const form_data_1 = __importDefault(require("form-data"));
const PINATA_API_KEY = process.env.PINATA_API_KEY;
const PINATA_API_SECRET = process.env.PINATA_API_SECRET;
function uploadFileToPinata(file) {
    return __awaiter(this, void 0, void 0, function* () {
        const form = new form_data_1.default();
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
        const res = yield axios_1.default.post("https://api.pinata.cloud/pinning/pinFileToIPFS", form, {
            maxBodyLength: Infinity,
            headers: {
                "Content-Type": `multipart/form-data; boundary=${form.getBoundary()}`,
                pinata_api_key: PINATA_API_KEY,
                pinata_secret_api_key: PINATA_API_SECRET,
            },
        });
        if (!res.data.IpfsHash) {
            throw new Error("Failed to upload file to IPFS");
        }
        return res.data.IpfsHash;
    });
}
function uploadJSONToPinata(json) {
    return __awaiter(this, void 0, void 0, function* () {
        // Don't wrap the metadata in pinataContent
        const res = yield axios_1.default.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", json, {
            headers: {
                "Content-Type": "application/json",
                pinata_api_key: PINATA_API_KEY,
                pinata_secret_api_key: PINATA_API_SECRET,
            },
        });
        if (!res.data.IpfsHash) {
            throw new Error("Failed to upload metadata to IPFS");
        }
        return res.data.IpfsHash;
    });
}
