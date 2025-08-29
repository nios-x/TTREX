import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAccount } from "wagmi";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function Fractionalise() {
  const { id } = useParams(); 
  const { address } = useAccount();
  const navigate = useNavigate();

  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFractionalise = async () => {
    if (!amount || !id || !address) {
      setError("Please provide all fields");
      return;
    }

    try {
      setLoading(true);
      setError(null);

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/properties/${id}/fractions/mint`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            noOfTokens: parseInt(amount, 10),
            address: address, // wallet connected
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to fractionalise");
      }

      // ✅ Redirect to property page
      navigate(`/property/${id}`);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6">
        <h1 className="text-xl font-semibold mb-4">
          Fractionalise Property #{id}
        </h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Fractions</label>
            <Input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter number of fractions"
              min="1"
            />
          </div>

          {error && (
            <p className="text-sm text-red-500 bg-red-50 dark:bg-red-900/30 p-2 rounded">
              {error}
            </p>
          )}

          <Button
            onClick={handleFractionalise}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Processing...
              </>
            ) : (
              "Mint Fractions"
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
