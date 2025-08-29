-- CreateTable
CREATE TABLE "public"."SellProposal" (
    "id" TEXT NOT NULL,
    "propertyId" TEXT NOT NULL,
    "fractionId" TEXT NOT NULL,
    "walletId" TEXT NOT NULL,
    "shardsForSale" INTEGER NOT NULL,
    "pricePerShard" DOUBLE PRECISION NOT NULL,
    "remaining" INTEGER NOT NULL,
    "executed" BOOLEAN NOT NULL DEFAULT false,
    "buyers" JSONB NOT NULL DEFAULT '[]',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SellProposal_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."SellProposal" ADD CONSTRAINT "SellProposal_propertyId_fkey" FOREIGN KEY ("propertyId") REFERENCES "public"."Property"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SellProposal" ADD CONSTRAINT "SellProposal_fractionId_fkey" FOREIGN KEY ("fractionId") REFERENCES "public"."Fraction"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."SellProposal" ADD CONSTRAINT "SellProposal_walletId_fkey" FOREIGN KEY ("walletId") REFERENCES "public"."Wallet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
