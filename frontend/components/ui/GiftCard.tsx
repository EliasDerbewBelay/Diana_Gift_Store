"use client";

import React from "react";
import Image from "next/image";
import { Heart, Eye } from "lucide-react";

export interface GiftCardProps {
  id: number;
  name?: string;
  title?: string;
  description: string;
  price: number | string;
  originalPrice?: string;
  category?: string;
  image: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  discount?: number;
  isInStock?: boolean;
  onAddToCart?: (id: number) => void;
  onViewDetails?: (id: number) => void;
  onAddToWishlist?: (id: number) => void;
}

const GiftCard: React.FC<GiftCardProps> = ({
  id,
  name,
  title,
  description,
  price,
  image,
  onAddToCart,
  onViewDetails,
  onAddToWishlist,
}) => {
  const displayName = name || title || "";

  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-[#f5f5dc] mb-6">
        <Image
          src={image}
          alt={displayName}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Wishlist Button */}
        <button
          onClick={() => onAddToWishlist?.(id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm"
          aria-label="Add to wishlist"
        >
          <Heart className="text-[#735C00] text-xl" size={20} />
        </button>

        {/* Hover Actions */}
        <div className="absolute inset-x-0 bottom-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-2xl bg-white/70 flex gap-3">
          <button
            onClick={() => onAddToCart?.(id)}
            className="flex-1 py-3 bg-[#735C00] text-white rounded-xl font-medium text-sm hover:brightness-110 transition-all"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onViewDetails?.(id)}
            className="p-3 bg-white text-[#735C00] rounded-xl border border-[#d0c5af]/30 hover:bg-white transition-all"
            aria-label="View details"
          >
            <Eye size={20} />
          </button>
        </div>
      </div>

      <h4 className="font-headline text-xl mb-1 text-[#1B1D0E]">
        {displayName}
      </h4>
      <p className="text-[#4d4635] text-sm mb-3 font-light leading-relaxed">
        {description}
      </p>
      <span className="text-[#735C00] font-bold text-lg tracking-tight font-headline">
        {typeof price === "number" ? `$${price.toFixed(2)}` : price}
      </span>
    </div>
  );
};

export default GiftCard;
