import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";
import { useAccount } from "wagmi";

interface SellProposal {
  id: string;
  fractionId: string;
  propertyId: string;
  remaining: number;
  pricePerShard: number; // in ETH
  property: {
    id: string;
    title: string;
  };
}

export default function BuyShards() {
  const [sellProposals, setSellProposals] = useState<SellProposal[]>([]);
  const [selectedProposal, setSelectedProposal] = useState<SellProposal | null>(null);
  const [quantity, setQuantity] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();

  // Fetch sell proposals
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/api/sellProposals`)
      .then(res => res.json())
      .then(data => setSellProposals(data))
      .catch(err => console.error(err));
  }, []);

  const handleBuy = async () => {
    if (!selectedProposal) return toast.error("Select a proposal");
    if (quantity <= 0 || quantity > selectedProposal.remaining)
      return toast.error("Invalid quantity");

    setLoading(true);
    try {
      const token = Cookies.get("token");
      if (!token) return;

      const totalPrice = selectedProposal.pricePerShard * quantity;

      const res = await fetch(`${import.meta.env.VITE_BACKEND}/api/fractions/buy`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({
          buyerWalletAddress: address,
          sellProposalId: selectedProposal.id,
          quantity,
          offeredPrice: totalPrice, // must match pricePerShard * quantity
        }),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success(`Purchased ${quantity} shards! TxHash: ${data.txHash}`);
        setQuantity(0);
        setSelectedProposal(null);
        // Optionally, refresh proposals
        setSellProposals(prev =>
          prev.map(p =>
            p.id === selectedProposal.id
              ? { ...p, remaining: p.remaining - quantity }
              : p
          )
        );
      } else {
        toast.error(data.error || "Purchase failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Purchase failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Buy Shards</h1>
      <div className="max-w-lg p-4 border border-zinc-400 rounded-lg w-full">
        <select
          className="w-full p-2 border border-zinc-400 rounded mb-2"
          value={selectedProposal?.id || ""}
          onChange={e =>
            setSelectedProposal(sellProposals.find(p => p.id === e.target.value) || null)
          }
        >
          <option value="">Select a proposal</option>
          {sellProposals.map(p => (
            <option key={p.id} value={p.id}>
              {p.property.title} — {p.remaining} shards left — Price per shard: {p.pricePerShard} ETH
            </option>
          ))}
        </select>

        <Input
          type="number"
          placeholder="Quantity to buy"
          value={quantity}
          onChange={e => setQuantity(Number(e.target.value))}
          className="mb-4 border border-zinc-400"
        />

        <Button onClick={handleBuy} disabled={loading}>
          {loading ? "Processing..." : "Buy Shards"}
        </Button>
      </div>
    </div>
  );
}
