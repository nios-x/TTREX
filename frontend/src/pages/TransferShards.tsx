import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Cookies from "js-cookie";
import { useAccount } from "wagmi";

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

export default function FractionsPage() {
  const [fractions, setFractions] = useState<Fraction[]>([]);
  const [transferFraction, setTransferFraction] = useState<Fraction | null>(null);
  const [unlockFraction, setUnlockFraction] = useState<Fraction | null>(null);
  const [transferAmount, setTransferAmount] = useState<number>(0);
  const [recipient, setRecipient] = useState("");
  const [loading, setLoading] = useState(false);
  const { address } = useAccount();

  // Fetch fractions
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND}/api/fractions`)
      .then(res => res.json())
      .then(data => setFractions(data))
      .catch(err => console.error(err));
  }, []);

  // --- Transfer Fractions ---
  const handleTransfer = async () => {
    if (!transferFraction) return toast.error("Select a fraction");
    if (!recipient) return toast.error("Recipient address required");
    if (transferAmount <= 0 || transferAmount > transferFraction.supply)
      return toast.error("Invalid amount");

    setLoading(true);
    try {
      const token = Cookies.get("token");
      if (!token) return;

      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/properties/${transferFraction.propertyId}/fractions/transfer`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({
            fromWalletAddress: address,
            toWalletAddress: recipient,
            fractionId: transferFraction.id,
            amount: transferAmount,
          }),
        }
      );

      const data = await res.json();
      if (res.ok) {
        toast.success("Fractions transferred successfully");

        setFractions(prev => {
          const updated = [...prev];

          // Subtract from sender
          const senderIndex = updated.findIndex(f => f.id === transferFraction.id);
          if (senderIndex >= 0) {
            updated[senderIndex] = {
              ...updated[senderIndex],
              supply: updated[senderIndex].supply - transferAmount,
            };
          }

          // Add to receiver
          const receiverIndex = updated.findIndex(
            f => f.owner?.address === recipient && f.propertyId === transferFraction.propertyId
          );
          if (receiverIndex >= 0) {
            updated[receiverIndex] = {
              ...updated[receiverIndex],
              supply: updated[receiverIndex].supply + transferAmount,
            };
          } else {
            updated.push({
              id: `temp-${Date.now()}`,
              propertyId: transferFraction.propertyId,
              supply: transferAmount,
              property: transferFraction.property,
              owner: { address: recipient },
            });
          }

          return updated;
        });

        setTransferAmount(0);
        setRecipient("");
        setTransferFraction(null);
      } else {
        toast.error(data.error || "Transfer failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Transfer failed");
    }
    setLoading(false);
  };

  // --- Unlock Fraction ---
  const handleUnlock = async () => {
    if (!unlockFraction) return toast.error("Select a fraction");
    setLoading(true);
    try {
      const token = Cookies.get("token");
      if (!token) return;
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/properties/${unlockFraction.propertyId}/fractions/unlock`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
          body: JSON.stringify({ walletAddress: address, propertyId: unlockFraction.propertyId }),
        }
      );
      const data = await res.json();
      if (res.ok) {
        toast.success(`Fractions unlocked! TxHash: ${data.txHash}`);

        // Remove unlocked fractions from state
        setFractions(prev =>
          prev.filter(f => f.propertyId !== unlockFraction.propertyId)
        );

        setUnlockFraction(null);
      } else {
        toast.error(data.error || "Unlock failed");
      }
    } catch (err) {
      console.error(err);
      toast.error("Unlock failed");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-6">
      <h1 className="text-2xl font-bold mb-6">Fractions Dashboard</h1>
      <div className="flex gap-5 w-screen">
        {/* Transfer Section */}
        <div className="max-w-lg p-4 border border-zinc-400 rounded-lg w-1/2">
          <h2 className="font-bold mb-4">Transfer Fractions</h2>
          <select
            className="w-full p-2 border border-zinc-400 rounded mb-2"
            value={transferFraction?.id || ""}
            onChange={e =>
              setTransferFraction(fractions.find(f => f.id === e.target.value) || null)
            }
          >
            <option value="" className="lg:rounded-full ">Select your fraction</option>
            {fractions
              .filter(f => f.owner?.address === address)
              .map(f => (
                <option key={f.id} value={f.id}>
                  {f.property.title} — Owned: {f.supply}
                </option>
              ))}
          </select>

          <Input
            type="text"
            placeholder="Recipient wallet address"
            value={recipient}
            onChange={e => setRecipient(e.target.value)}
            className="mb-2 border border-zinc-400 "
          />
          <Input
            type="number"
            placeholder="Amount to transfer"
            value={transferAmount}
            onChange={e => setTransferAmount(Number(e.target.value))}
            className="mb-4 border border-zinc-400 "
          />
          <Button onClick={handleTransfer} disabled={loading}>
            {loading ? "Transferring..." : "Transfer Fractions"}
          </Button>
        </div>

        {/* Unlock Section */}
        <div className="max-w-lg p-4 border border-zinc-400 h-max rounded-lg w-1/2">
          <h2 className="font-bold mb-4">Unlock Fractions</h2>
          <select
            className="w-full p-2 border border-zinc-400 rounded mb-2"
            value={unlockFraction?.id || ""}
            onChange={e =>
              setUnlockFraction(fractions.find(f => f.id === e.target.value) || null)
            }
          >
            <option value="">Select your fraction</option>
            {fractions
              .filter(f => f.owner?.address === address)
              .map(f => (
                <option key={f.id} value={f.id}>
                  {f.property.title} — Owned: {f.supply}
                </option>
              ))}
          </select>
          <Button onClick={handleUnlock} disabled={loading}>
            {loading ? "Unlocking..." : "Unlock Fractions"}
          </Button>
        </div>
      </div>
    </div>
  );
}
