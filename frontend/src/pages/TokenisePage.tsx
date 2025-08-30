import { useState } from "react";
import { useAccount } from "wagmi";
import Cookies from "js-cookie";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Coins, Upload, CheckCircle, AlertCircle, Image as ImageIcon } from "lucide-react";

interface PropertyFormData {
  title: string;
  description: string;
  valuation: string;
}

function StatusMessage({ type, message }: { type: "success" | "error"; message: string }) {
  const colors = {
    success: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300",
    error: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-700 dark:text-red-300",
  };
  const Icon = type === "success" ? CheckCircle : AlertCircle;
  return (
    <div className={`flex items-center gap-2 p-3 rounded-md border ${colors[type]}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm">{message}</span>
    </div>
  );
}

export default function TokenisePage() {
  const [formData, setFormData] = useState<PropertyFormData>({ title: "", description: "", valuation: "" });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const { address } = useAccount();

  const handleInputChange = (field: keyof PropertyFormData, value: string) =>
    setFormData(prev => ({ ...prev, [field]: value }));

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) setFile(files[0]);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file || !address) {
      setErrorMessage("Upload an image and connect wallet");
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const token = Cookies.get("token"); // Get token from cookies
      if (!token) {
        setErrorMessage("Please login first");
        setSubmitStatus("error");
        // Optionally redirect to login
        // window.location.href = "/login";
        return;
      }

      const form = new FormData();
      form.append("file", file);
      form.append("title", formData.title);
      form.append("description", formData.description);
      form.append("valuation", formData.valuation);
      form.append("address", address);
      

      const res = await fetch(`${import.meta.env.VITE_BACKEND}/api/properties`, {
        method: "POST",
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: form,
      });

      if (!res.ok) {
        const error = await res.json();
        throw new Error(error.error || "Failed to create NFT");
      }

      const data = await res.json();
      setSubmitStatus("success");
      setFormData({ title: "", description: "", valuation: "" });
      setFile(null);

    } catch (err) {
      console.error("Form submission error:", err);
      setErrorMessage(err instanceof Error ? err.message : "Failed to create NFT");
      setSubmitStatus("error");
      
      // Handle unauthorized error specifically
      if (err instanceof Error && err.message.includes("Unauthorized")) {
        Cookies.remove("token"); // Clear invalid token
        setErrorMessage("Session expired. Please login again");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white m-16 dark:bg-[#0F0F12] rounded-xl p-6 border border-gray-200 dark:border-[#1F1F23]">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
          <Coins className="w-5 h-5 text-zinc-900 dark:text-zinc-50" /> Create NFT Property
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Tokenize your real estate property as an NFT for fractional ownership
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6 ">
        <div className="space-y-4">
          <div>
            <Label htmlFor="title">Property Title</Label>
            <Input
              id="title"
              type="text"
              value={formData.title}
              onChange={(e) => handleInputChange("title", e.target.value)}
              placeholder="Enter property title"
              className="mt-2 w-1/3"
              required
            />
          </div>
          <div>
            <Label htmlFor="valuation">Property Valuation (INR)</Label>
            <Input
              id="valuation"
              type="number"
              step="0.01"
              min="0"
              value={formData.valuation}
              onChange={(e) => handleInputChange("valuation", e.target.value)}
              placeholder="0.00"
              className="mt-2 w-1/3 "
              required
            />
          </div>
          <div>
            <Label htmlFor="description">Description</Label>
            <Input
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange("description", e.target.value)}
              placeholder="Describe the property"
              className="mt-2 w-1/2 resize-none"
              required
            />
          </div>
          <div>
            <Label htmlFor="file">Upload Property Image</Label>
            <Input
              id="file"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="mt-2 w-max lg:py-1 lg:px-3 rounded-full"
              required
              
            />
            {file && (
              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 flex items-center gap-2">
                <ImageIcon className="w-4 h-4" /> {file.name}
              </p>
            )}
          </div>
        </div>

        {submitStatus === "success" && (
          <StatusMessage type="success" message="Property NFT created successfully!" />
        )}
        {submitStatus === "error" && (
          <StatusMessage type="error" message={errorMessage || "Failed to create property NFT"} />
        )}
        <div className="flex items-center justify-between pt-4">
          <Badge variant="secondary">
            {!address ? "Please Connect Wallet" : `Status: ${submitStatus.toUpperCase()}`}
          </Badge>
          <Button type="submit" disabled={isSubmitting} className="bg-gray-900 dark:bg-white text-white dark:text-gray-900">
            {isSubmitting ? (
              <><Upload className="w-4 h-4 mr-2 animate-spin" /> Creating...</>
            ) : (
              <><Upload className="w-4 h-4 mr-2" /> Create NFT Property</>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}
