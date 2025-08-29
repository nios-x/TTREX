import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  Building,
  Calendar,
  CheckCircle2,
  Timer,
  AlertCircle,
  Share2,
  ArrowRight,
} from "lucide-react";
import { useAccount } from 'wagmi';
import { Link } from 'react-router-dom';
interface Property {
  id: string;
  title: string;
  description: string;
  valuation: number;
  imageUrl: string;
  tokenId: string;
  status: string;
  createdAt: string;
  ownerId: string;
  nftAddress: string;
}

const statusConfig = {
  VERIFIED: {
    icon: CheckCircle2,
    class: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  PENDING: {
    icon: Timer,
    class: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-100 dark:bg-amber-900/30",
  },
  FAILED: {
    icon: AlertCircle,
    class: "text-red-600 dark:text-red-400",
    bg: "bg-red-100 dark:bg-red-900/30",
  },
};

export default function Property() {
  const { id } = useParams();
  const { address } = useAccount(); // Get connected wallet address
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProperty();
  }, [id]);

  const fetchProperty = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BACKEND}/api/properties/${id}`);
      if (!response.ok) {
        throw new Error('Property not found');
      }
      const data = await response.json();
      setProperty(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch property');
    } finally {
      setLoading(false);
    }
  };

  const canFractionalize = () => {
    if (!property || !address) {
      console.log("No property or address", { property, address });
      return false;
    }
      
    console.log("Comparing addresses:", {
      property
    });
    
    return property.nftAddress === address;
  };

  useEffect(() => {
    if (property && address) {
      console.log("Property owner:", property.ownerId);
      console.log("Connected wallet:", address);
      console.log("Can fractionalize:", canFractionalize());
    }
  }, [property, address]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-zinc-900 dark:border-zinc-100" />
      </div>
    );
  }

  if (error || !property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-500 dark:text-red-400">{error || 'Property not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-zinc-900/70 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm backdrop-blur-xl">
          <div className="relative h-64 rounded-t-xl overflow-hidden">
            <img 
              src={property.imageUrl.replace('ipfs://', 'https://gateway.pinata.cloud/ipfs/')}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4">
              <div
                className={cn(
                  "px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5",
                  statusConfig[property.status as keyof typeof statusConfig]?.bg,
                  statusConfig[property.status as keyof typeof statusConfig]?.class
                )}
              >
                {React.createElement(statusConfig[property.status as keyof typeof statusConfig]?.icon || Timer, {
                  className: "w-4 h-4",
                })}
                {property.status}
              </div>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <h1 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
                {property.title}
              </h1>
              <p className="text-zinc-600 dark:text-zinc-400">
                {property.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Valuation</p>
                <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  ₹{property.valuation}
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-zinc-600 dark:text-zinc-400">Token ID</p>
                <p className="text-lg font-mono text-zinc-900 dark:text-zinc-100">
                  #{property.tokenId}
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <p className="text-sm text-zinc-600 dark:text-zinc-400">Account Holder</p>
              <div className="flex items-center gap-2">
                <code className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded font-mono flex-1 truncate">
                  {property.nftAddress}
                </code>
                <button 
                  onClick={() => navigator.clipboard.writeText(property.nftAddress)}
                  className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800">
              {!address ? (
                <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                  Please connect your wallet to fractionalize this NFT
                </div>
              ) : canFractionalize() ? (
                <Link
                  className={cn(
                    "w-full flex items-center justify-center gap-2",
                    "py-3 px-4",
                    "text-sm font-medium",
                    "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900",
                    "hover:bg-zinc-800 dark:hover:bg-zinc-200",
                    "rounded-lg",
                    "transition-colors duration-200",
                  )}
                  to={`/fractionalise/${property.id}`}
                >
                  Fractionalize Property
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ) : (
                <div className="text-center text-sm text-zinc-500 dark:text-zinc-400">
                  Only the property owner ({property.nftAddress}) can fractionalize this NFT
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
