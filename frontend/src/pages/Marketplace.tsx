import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Building,
  Layers,
  ArrowRight,
  CheckCircle2,
  Timer,
  AlertCircle,
} from "lucide-react";
import CreateToken from "../components/CreateToken";

interface Property {
  id: string;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
  };
  title: string;
  description: string;
  valuation: number;
  imageUrl: string;
  tokenId: string;
  status: string;
  createdAt: string;
  nftAddress: string;
}

interface Shard {
  id: string;
  propertyId: string;
  walletId: string;
  supply: number;
  createdAt: string;
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

export default function Marketplace() {
  const [activeTab, setActiveTab] = useState<"nfts" | "shards">("nfts");
  const [nfts, setNfts] = useState<Property[]>([]);
  const [shards, setShards] = useState<Shard[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 20;
  console.log(nfts)
  useEffect(() => {
    fetchItems();
  }, [activeTab, page]);

  const fetchItems = async () => {
    try {
      const endpoint = activeTab === "nfts" ? "properties" : "fractions";
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/${endpoint}?page=${page}&limit=${ITEMS_PER_PAGE}`
      );
      const data = await response.json();

      if (activeTab === "nfts") {
        setNfts((prev) => (page === 1 ? data : [...prev, ...data]));
      } else {
        setShards((prev) => (page === 1 ? data : [...prev, ...data]));
      }

      setHasMore(data.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  const renderNFTCard = (property: Property) => (
      <div key={property.id} className={cn("flex flex-col w-full bg-white dark:bg-zinc-900/70 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm backdrop-blur-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-200")}>
        <div className="p-4 space-y-3">
          <div className="flex items-start justify-between">
            <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
              <Building className="w-4 h-4" />
            </div>
            <div className={cn("px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5", statusConfig[property.status as keyof typeof statusConfig]?.bg, statusConfig[property.status as keyof typeof statusConfig]?.class)}>
              {React.createElement(statusConfig[property.status as keyof typeof statusConfig]?.icon || Timer, { className: "w-3.5 h-3.5" })}
              {property.status}
            </div>
          </div>
  
          <img src={property.imageUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")} alt={property.title} className="w-full h-32 object-cover rounded-lg" />
  
          <div>
            <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">{property.title}</h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">{property.description}</p>
          </div>
  
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">₹{property.valuation}</span>
            <span className="text-xs text-zinc-600  dark:text-zinc-400">valuation</span>
          </div>
            <span className="text-xs  text-zinc-700 my-1 dark:text-zinc-100">₹{property.nftAddress}</span>
            <div>
              
              <span className="text-xs  text-zinc-700 my-1 dark:text-zinc-100">Owner: {property.owner.firstName + " "+ property.owner.lastName}</span>

            </div>
  
          <div className="flex items-center text-xs text-zinc-600 dark:text-zinc-400">
            <Calendar className="w-3.5 h-3.5 mr-1.5" />
            <span>{new Date(property.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
           <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800">
        <Link
          to={`/property/${property.id}`}
          className={cn(
            "w-full flex items-center justify-center gap-2",
            "py-2.5 px-3",
            "text-xs font-medium",
            "text-zinc-600 dark:text-zinc-400",
            "hover:text-zinc-900 dark:hover:text-zinc-100",
            "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
            "transition-colors duration-200"
          )}
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
      </div>
    );
const renderShardCard = (shard: Shard & { property?: Property }) => {
  // If property info is available (via backend join), use it; else fallback to IDs
  const property = shard.property;
  const propertyImage = property?.imageUrl
    ? property.imageUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")
    : "https://via.placeholder.com/150";

  return (
    <div
      key={shard.id}
      className={cn(
        "flex flex-col w-full bg-white dark:bg-zinc-900/70",
        "rounded-xl border border-zinc-100 dark:border-zinc-800",
        "hover:border-zinc-200 dark:hover:border-zinc-700",
        "shadow-sm backdrop-blur-xl transition-all duration-200"
      )}
    >
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
            <Layers className="w-4 h-4" />
          </div>
          <span className="px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800">
            {shard.supply.toLocaleString()} Shards
          </span>
        </div>

        <img src={propertyImage} alt={property?.title || "Property Image"} className="w-full h-32 object-cover rounded-lg" />

        <div>
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
            {property?.title || `Property #${shard.propertyId.slice(0, 6)}...`}
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
            {property?.description || "Fractional property shard"}
          </p>
        </div>

        {property && (
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
              ₹{property.valuation.toLocaleString()}
            </span>
            <span className="text-xs text-zinc-600 dark:text-zinc-400">valuation</span>
          </div>
        )}

        <div>
          <p className="text-xs text-zinc-700 dark:text-zinc-100">
            Owner: {shard.walletId.slice(0, 6)}...
          </p>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
          <Calendar className="w-3.5 h-3.5" />
          <span>Minted: {new Date(shard.createdAt).toLocaleDateString()}</span>
        </div>
      </div>

      <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800">
        <button
          className={cn(
            "w-full flex items-center justify-center gap-2 py-2.5 px-3",
            "text-xs font-medium text-zinc-600 dark:text-zinc-400",
            "hover:text-zinc-900 dark:hover:text-zinc-100",
            "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
            "transition-colors duration-200"
          )}
        >
          Buy Shards
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};




  return (
    <div className="min-h-screen p-6 ">
      
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === "nfts"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
            onClick={() => {
              setActiveTab("nfts");
              setPage(1);
            }}
          >
            NFTs
          </button>
          <button
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === "shards"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
            onClick={() => {
              setActiveTab("shards");
              setPage(1);
            }}
          >
            Shards
          </button>
        </div>
        <Link to="/tokenise">
          <CreateToken />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {activeTab === "nfts"
          ? nfts.map(renderNFTCard)
          : shards.map(renderShardCard)}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium",
              "text-zinc-600 dark:text-zinc-400",
              "hover:text-zinc-900 dark:hover:text-zinc-100",
              "border border-zinc-200 dark:border-zinc-700",
              "hover:border-zinc-300 dark:hover:border-zinc-600",
              "transition-colors duration-200"
            )}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
}



/*


import { useAccount } from "wagmi";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import {
  Calendar,
  Building,
  Layers,
  ArrowRight,
  CheckCircle2,
  Timer,
  AlertCircle,
} from "lucide-react";
import CreateToken from "../components/CreateToken";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

// ---------- Types ----------
interface Property {
  id: string;
  owner: {
    id: string;
    firstName: string;
    lastName: string;
  };
  title: string;
  description: string;
  valuation: number;
  imageUrl: string;
  tokenId: string;
  status: string;
  createdAt: string;
  nftAddress: string;
}

interface Shard {
  id: string;
  propertyId: string;
  walletId: string;
  supply: number;
  createdAt: string;
  property?: Property;
}

interface Proposal {
  id: string;
  fraction: any;
  property: any;
  createdAt: string;
}

interface Pagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

// ---------- Status UI Config ----------
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

// ---------- Marketplace ----------
export default function Marketplace() {
  const [activeTab, setActiveTab] = useState<"nfts" | "shards">("nfts");
  const [nfts, setNfts] = useState<Property[]>([]);
  const [shards, setShards] = useState<Shard[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const ITEMS_PER_PAGE = 20;
  // ---- Proposals (Global Section) ----
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [proposalPagination, setProposalPagination] = useState<Pagination | null>(null);
  const [proposalLoading, setProposalLoading] = useState(false);
  const [proposalPage, setProposalPage] = useState(1);
  const { address } = useAccount();
  // ---------------- Fetch NFTs / Shards ----------------
  useEffect(() => {
    fetchItems();
  }, [activeTab, page]);
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null)
  const [buying, setBuying] = useState(false)

  const handleBuy = async () => {
    if (!selectedProposal) return

    try {
      setBuying(true)
      const res = await fetch(`/api/proposals/${selectedProposal.id}/buy`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`, // adjust how you store token
        },
        body: JSON.stringify({ fractionId: selectedProposal.fraction?.id }),
      })

      if (!res.ok) {
        throw new Error("Failed to buy fraction")
      }

      const data = await res.json()
      console.log("Purchase successful:", data)

      // Close dialog after success
      setSelectedProposal(null)
    } catch (err) {
      console.error(err)
      alert("Error while buying fraction")
    } finally {
      setBuying(false)
    }
  }

  const fetchItems = async () => {
    try {
      const endpoint = activeTab === "nfts" ? "properties" : "fractions";
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/${endpoint}?page=${page}&limit=${ITEMS_PER_PAGE}`
      );
      const data = await response.json();

      if (activeTab === "nfts") {
        setNfts((prev) => (page === 1 ? data : [...prev, ...data]));
      } else {
        setShards((prev) => (page === 1 ? data : [...prev, ...data]));
      }

      setHasMore(data.length === ITEMS_PER_PAGE);
    } catch (error) {
      console.error("Failed to fetch items:", error);
    }
  };

  // ---------------- Fetch Global Sell Proposals ----------------
  useEffect(() => {
    fetchProposals(proposalPage);
  }, [proposalPage]);

  const fetchProposals = async (pageNum: number) => {
    try {
      setProposalLoading(true);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND}/api/sell-proposals?page=${pageNum}&limit=5`
      );
      const data = await res.json();
      setProposals(data.proposals);
      setProposalPagination(data.pagination);
    } catch (err) {
      console.error("Error fetching proposals:", err);
    } finally {
      setProposalLoading(false);
    }
  };

  // ---------------- Render NFT Card ----------------
  const renderNFTCard = (property: Property) => (
    <div
      key={property.id}
      className={cn(
        "flex flex-col w-full bg-white dark:bg-zinc-900/70 rounded-xl border border-zinc-100 dark:border-zinc-800 shadow-sm backdrop-blur-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-200"
      )}
    >
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
            <Building className="w-4 h-4" />
          </div>
          <div
            className={cn(
              "px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1.5",
              statusConfig[property.status as keyof typeof statusConfig]?.bg,
              statusConfig[property.status as keyof typeof statusConfig]?.class
            )}
          >
            {React.createElement(
              statusConfig[property.status as keyof typeof statusConfig]?.icon || Timer,
              { className: "w-3.5 h-3.5" }
            )}
            {property.status}
          </div>
        </div>

        <img
          src={property.imageUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")}
          alt={property.title}
          className="w-full h-32 object-cover rounded-lg"
        />

        <div>
          <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
            {property.title}
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
            {property.description}
          </p>
        </div>

        <div className="flex items-center gap-1.5">
          <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
            ₹{property.valuation}
          </span>
          <span className="text-xs text-zinc-600  dark:text-zinc-400">valuation</span>
        </div>
        <span className="text-xs  text-zinc-700 my-1 dark:text-zinc-100">
          ₹{property.nftAddress}
        </span>
        <div>
          <span className="text-xs  text-zinc-700 my-1 dark:text-zinc-100">
            Owner: {property.owner.firstName + " " + property.owner.lastName}
          </span>
        </div>

        <div className="flex items-center text-xs text-zinc-600 dark:text-zinc-400">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          <span>{new Date(property.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800">
        <Link
          to={`/property/${property.id}`}
          className={cn(
            "w-full flex items-center justify-center gap-2",
            "py-2.5 px-3",
            "text-xs font-medium",
            "text-zinc-600 dark:text-zinc-400",
            "hover:text-zinc-900 dark:hover:text-zinc-100",
            "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
            "transition-colors duration-200"
          )}
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );

  // ---------------- Render Shard Card ----------------
  const renderShardCard = (shard: Shard) => {
    const property = shard.property;
    const propertyImage = property?.imageUrl
      ? property.imageUrl.replace("ipfs://", "https://gateway.pinata.cloud/ipfs/")
      : "https://via.placeholder.com/150";

    const [localProposals, setLocalProposals] = useState<Proposal[]>([]);
    const [loading, setLoading] = useState(false);

    const fetchProposalsForShard = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND}/api/sell-proposals?propertyId=${shard.propertyId}`
        );
        const data = await res.json();
        setLocalProposals(data.proposals || []);
      } catch (err) {
        console.error("Failed to fetch proposals:", err);
      } finally {
        setLoading(false);
      }
    };
    
    return (
      <Dialog>
        <DialogTrigger asChild>
          <div
            key={shard.id}
            className={cn(
              "flex flex-col w-full bg-white dark:bg-zinc-900/70",
              "rounded-xl border border-zinc-100 dark:border-zinc-800",
              "hover:border-zinc-200 dark:hover:border-zinc-700",
              "shadow-sm backdrop-blur-xl transition-all duration-200"
            )}
          >
            <div className="p-4 space-y-3">
              <div className="flex items-start justify-between">
                <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="px-2 py-1 rounded-full text-xs font-medium bg-zinc-100 dark:bg-zinc-800">
                  {shard.supply.toLocaleString()} Shards
                </span>
              </div>

              <img
                src={propertyImage}
                alt={property?.title || "Property Image"}
                className="w-full h-32 object-cover rounded-lg"
              />

              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100 mb-1">
                  {property?.title || `Property #${shard.propertyId.slice(0, 6)}...`}
                </h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">
                  {property?.description || "Fractional property shard"}
                </p>
              </div>
            </div>

            <div className="mt-auto border-t border-zinc-100 dark:border-zinc-800">
              <button
                onClick={fetchProposalsForShard}
                className={cn(
                  "w-full flex items-center justify-center gap-2 py-2.5 px-3",
                  "text-xs font-medium text-zinc-600 dark:text-zinc-400",
                  "hover:text-zinc-900 dark:hover:text-zinc-100",
                  "hover:bg-zinc-100 dark:hover:bg-zinc-800/50",
                  "transition-colors duration-200"
                )}
              >
                Buy Shards
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </DialogTrigger>

         Dialog Popover 
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Sell Proposals</DialogTitle>
          </DialogHeader>

          {loading ? (
            <p className="text-sm text-zinc-500">Loading proposals...</p>
          ) : localProposals.length === 0 ? (
            <p className="text-sm text-zinc-500">No proposals for this shard</p>
          ) : (
            <div className="space-y-3">
                  {loading ? (
        <p className="text-sm text-zinc-500">Loading proposals...</p>
      ) : localProposals.length === 0 ? (
        <p className="text-sm text-zinc-500">No proposals for this shard</p>
      ) : (
        <div className="space-y-3">
          {localProposals.map((p) => (
            <div
              key={p.id}
              className="p-3 border rounded-lg bg-zinc-50 dark:bg-zinc-800/50 flex justify-between items-center"
            >
              <div>
                <p className="text-sm font-medium">
                  {p.property?.title || "Untitled Property"}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Fraction ID: {p.fraction?.id}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Created at: {new Date(p.createdAt).toLocaleString()}
                </p>
              </div>
              <Button
                size="sm"
                onClick={() => setSelectedProposal(p)}
              >
                Buy
              </Button>
            </div>
          ))}
        </div>
      )}

       Buy Confirmation Dialog 
      <Dialog open={!!selectedProposal} onOpenChange={() => setSelectedProposal(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Purchase</DialogTitle>
          </DialogHeader>
          {selectedProposal && (
            <div className="space-y-2 text-sm">
              <p><strong>Property:</strong> {selectedProposal.property?.title}</p>
              <p><strong>Fraction ID:</strong> {selectedProposal.fraction?.id}</p>
              <p><strong>Created At:</strong> {new Date(selectedProposal.createdAt).toLocaleString()}</p>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setSelectedProposal(null)}>
              Cancel
            </Button>
            <Button onClick={handleBuy} disabled={buying}>
              {buying ? "Processing..." : "Confirm Buy"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

            </div>
          )}
        </DialogContent>
      </Dialog>
    );
  };

  // ---------- Main Return ----------
  return (
    <div className="min-h-screen p-6">
       Tabs 
      <div className="flex justify-between items-center mb-6">
        <div className="flex gap-4">
          <button
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === "nfts"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
            onClick={() => {
              setActiveTab("nfts");
              setPage(1);
            }}
          >
            NFTs
          </button>
          <button
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium transition-colors",
              activeTab === "shards"
                ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            )}
            onClick={() => {
              setActiveTab("shards");
              setPage(1);
            }}
          >
            Shards
          </button>
        </div>
        <Link to="/tokenise">
          <CreateToken />
        </Link>
      </div>

       NFT / Shard Grid 
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {activeTab === "nfts"
          ? nfts.map(renderNFTCard)
          : shards.map(renderShardCard)}
      </div>

      {hasMore && (
        <div className="mt-6 text-center">
          <button
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-medium",
              "text-zinc-600 dark:text-zinc-400",
              "hover:text-zinc-900 dark:hover:text-zinc-100",
              "border border-zinc-200 dark:border-zinc-700",
              "hover:border-zinc-300 dark:hover:border-zinc-600",
              "transition-colors duration-200"
            )}
            onClick={() => setPage((prev) => prev + 1)}
          >
            Load More
          </button>
        </div>
      )}

       ---------------- Global Sell Proposals Section ---------------- 
      <div className="mt-12">
        <h2 className="text-lg font-semibold mb-4">Sell Proposals</h2>

        {proposalLoading ? (
          <div className="text-gray-500">Loading proposals...</div>
        ) : proposals.length === 0 ? (
          <div className="text-gray-500">No proposals available.</div>
        ) : (
          <ul className="space-y-3">
           {proposals.map((p) => (
            <div
              key={p.id}
              className="p-3 border rounded-lg bg-zinc-50 dark:bg-zinc-800/50 flex justify-between items-center"
            >
              <div>
                <p className="text-sm font-medium">
                  {p.property?.title || "Untitled Property"}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Fraction ID: {p.fraction?.id}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Created at: {new Date(p.createdAt).toLocaleString()}
                </p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Price per Shard: {Number(p.pricePerShard).toFixed(8)} ETH
                </p>
              </div>
              <Button
                size="sm"
                onClick={() => setSelectedProposal(p)}
              >
                Buy
              </Button>
            </div>
          ))}
          </ul>
        )}

         Pagination Controls 
        {proposalPagination && (
          <div className="flex items-center justify-between mt-4">
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={!proposalPagination.hasPrevPage || proposalLoading}
              onClick={() => setProposalPage((prev) => prev - 1)}
            >
              Prev
            </button>
            <span>
              Page {proposalPagination.page} of {proposalPagination.totalPages}
            </span>
            <button
              className="px-3 py-1 border rounded disabled:opacity-50"
              disabled={!proposalPagination.hasNextPage || proposalLoading}
              onClick={() => setProposalPage((prev) => prev + 1)}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
}












*/