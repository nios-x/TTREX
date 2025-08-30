import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";
import { useAccount } from "wagmi";
import  { Label } from "@/components/ui/label";
interface Fraction {
  id: string;
  propertyId: string;
  supply: number;
  property: {
    id: string;
    title: string;
  };
  owner: {
    address: string;
    user?: {
      firstName: string;
      lastName: string;
    };
  };
}

export default function CreateSellProposal() {
  const [fractions, setFractions] = useState<Fraction[]>([]);
  const [selectedFraction, setSelectedFraction] = useState<Fraction | null>(null);
  const [shardsForSale, setShardsForSale] = useState<number>(0);
  const [pricePerShard, setPricePerShard] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/api/fractions`)
      .then(res => res.json())
      .then(data => setFractions(data.filter((f: Fraction) => f.owner?.address === address)))
      .catch(err => console.error(err));
  }, [address]);

  const handleCreateSellProposal = async () => {
    if (!selectedFraction) return toast.error("Select a fraction");
    if (shardsForSale <= 0 || shardsForSale > selectedFraction.supply)
      return toast.error("Invalid number of shards");
    if (pricePerShard <= 0) return toast.error("Price per shard must be greater than 0");

    setLoading(true);
    try {
      const token = Cookies.get("token");
      if (!token) return;

      const res = await fetch(`${import.meta.env.VITE_BACKEND}/api/fractions/sell`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          walletAddress: address,
          fractionId: selectedFraction.id,
          shardsForSale,
          pricePerShard,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Sell proposal created!");
        setShardsForSale(0);
        setPricePerShard(0);
        setSelectedFraction(null);
      } else {
        toast.error(data.error || "Failed to create sell proposal");
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to create sell proposal");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Create Sell Proposal</h1>
      <div className="max-w-lg p-4 border border-zinc-400 rounded-lg w-full">
        <select
          className="w-full p-2 border border-zinc-400 rounded mb-2"
          value={selectedFraction?.id || ""}
          onChange={e =>
            setSelectedFraction(fractions.find(f => f.id === e.target.value) || null)
          }
        >
          <option value="">Select your fraction</option>
          {fractions.map(f => (
            <option key={f.id} value={f.id}>
              {f.property.title} — Owned: {f.supply}
            </option>
          ))}
        </select>

        <Label>Shards for Sale</Label>
        <Input
          type="number"
          placeholder="Shards to sell"
          value={shardsForSale}
          onChange={e => setShardsForSale(Number(e.target.value))}
          className="mb-2 border border-zinc-400"
        />
        <Label>Price in Eth Per Unit of </Label>
        <Input
          type="number"
          placeholder="Price per shard (ETH)"
          value={pricePerShard}
          onChange={e => setPricePerShard(Number(e.target.value))}
          className="mb-4 border border-zinc-400"
        />

        <Button onClick={handleCreateSellProposal} disabled={loading}>
          {loading ? "Creating..." : "Create Sell Proposal"}
        </Button>
      </div>
    </div>
  );
}
