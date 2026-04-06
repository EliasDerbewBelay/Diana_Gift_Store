"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Minus, Plus, Truck, Gift, Verified } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useStore } from "@/context/StoreContext";

interface ProductActionsProps {
  productId: string;
  price: number;
}

const ProductActions = ({ productId, price }: ProductActionsProps) => {
  const router = useRouter();
  const { requireAuth } = useAuth();
  const { addToCart, processingIds } = useStore();
  const [quantity, setQuantity] = useState(1);
  const [monogram, setMonogram] = useState("");
  const [giftMsg, setGiftMsg] = useState("");
  const [added, setAdded] = useState(false);

  const isProcessing = processingIds.has(productId);

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <>
      <div className="flex items-baseline gap-4 mb-6">
        <span className="text-2xl font-headline text-[#735C00]">
          ${price.toFixed(2)}
        </span>
        <span className="text-xs font-label uppercase tracking-widest opacity-50">
          Inclusive of all taxes
        </span>
      </div>

      {/* Quantity and Monogram */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8 mb-6">
        <div className="flex flex-col gap-2 min-w-[120px]">
          <span className="font-label uppercase text-[10px] tracking-widest opacity-60">
            Quantity
          </span>
          <div className="flex items-center border-b-[1.5px] border-[#d0c5af] py-1.5 gap-5">
            <button
              onClick={decreaseQuantity}
              className="hover:text-[#735C00] transition-colors"
            >
              <Minus size={18} />
            </button>
            <span className="text-base font-bold w-6 text-center">
              {quantity}
            </span>
            <button
              onClick={increaseQuantity}
              className="hover:text-[#735C00] transition-colors"
            >
              <Plus size={18} />
            </button>
          </div>
        </div>

        <div className="flex-grow w-full">
          <span className="font-label uppercase text-[10px] tracking-widest opacity-60">
            Box Monogram
          </span>
          <div className="border-b-[1.5px] border-[#d0c5af] py-1.5">
            <input
              className="bg-transparent border-none w-full focus:ring-0 p-0 text-sm text-[#1B1D0E] placeholder:opacity-30 outline-none"
              placeholder="Add initials (Optional)"
              type="text"
              value={monogram}
              onChange={(e) => setMonogram(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Gift Message */}
      <div className="w-full mb-10">
        <span className="font-label uppercase text-[10px] tracking-widest opacity-60">
          Gift Message
        </span>
        <div className="border-b-[1.5px] border-[#d0c5af] py-1.5">
          <input
            className="bg-transparent border-none w-full focus:ring-0 p-0 text-sm text-[#1B1D0E] placeholder:opacity-30 outline-none"
            placeholder="Add a personal touch (Optional)"
            type="text"
            value={giftMsg}
            onChange={(e) => setGiftMsg(e.target.value)}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button 
          onClick={() => requireAuth(async () => {
            await addToCart(productId, quantity, monogram, giftMsg);
            setAdded(true);
            setTimeout(() => setAdded(false), 2000);
          })}
          disabled={added || isProcessing}
          className={`py-4 px-6 rounded-xl border border-[#d0c5af] font-label uppercase tracking-widest text-xs transition-all hover:scale-[1.02] flex items-center justify-center gap-2 ${
            added 
              ? "bg-green-600 text-white border-green-600" 
              : "hover:bg-[#f5f5dc]"
          } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {isProcessing ? "Processing..." : added ? "Added!" : "Add to Cart"}
        </button>
        <button 
          onClick={() => requireAuth(async () => {
            await addToCart(productId, quantity, monogram, giftMsg);
            router.push("/cart");
          })}
          disabled={isProcessing}
          className={`py-4 px-6 rounded-xl bg-gradient-to-r from-[#735C00] to-[#d4af37] text-white font-label uppercase tracking-widest text-xs font-bold shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center ${
            isProcessing ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isProcessing ? "Processing..." : "Order Now"}
        </button>
      </div>

      {/* Trust Badges */}
      <div className="mt-12 pt-6 border-t border-[#d0c5af]/30 grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center text-center gap-1.5">
          <Truck className="text-[#d4af37]" size={20} />
          <span className="text-[9px] font-label uppercase tracking-tighter opacity-70">
            Express Global Delivery
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5">
          <Gift className="text-[#d4af37]" size={20} />
          <span className="text-[9px] font-label uppercase tracking-tighter opacity-70">
            Luxury Gift Wrap
          </span>
        </div>
        <div className="flex flex-col items-center text-center gap-1.5">
          <Verified className="text-[#d4af37]" size={20} />
          <span className="text-[9px] font-label uppercase tracking-tighter opacity-70">
            Artisan Authenticity
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductActions;
