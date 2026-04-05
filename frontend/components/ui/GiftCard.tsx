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
  compact?: boolean;
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
  compact = false,
  onAddToCart,
  onViewDetails,
  onAddToWishlist,
}) => {
  const displayName = name || title || "";

  return (
    <div className="group cursor-pointer">
      {/* Image */}
      <div
        className={`relative overflow-hidden rounded-lg bg-[#f5f5dc] ${
          compact ? "aspect-[3/2] mb-3" : "aspect-[4/5] mb-6"
        }`}
      >
        <Image
          src={image}
          alt={displayName}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Wishlist Button */}
        <button
          onClick={() => onAddToWishlist?.(id)}
          className={`absolute top-2.5 right-2.5 rounded-full bg-white/80 hover:bg-white transition-colors shadow-sm ${
            compact ? "p-1.5" : "p-2"
          }`}
          aria-label="Add to wishlist"
        >
          <Heart className="text-[#735C00]" size={compact ? 14 : 20} />
        </button>

        {/* Hover Actions */}
        <div
          className={`absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-2xl bg-white/70 flex gap-2 ${
            compact ? "p-2.5" : "p-6"
          }`}
        >
          <button
            onClick={() => onAddToCart?.(id)}
            className={`flex-1 bg-[#735C00] text-white rounded-lg font-medium hover:brightness-110 transition-all ${
              compact ? "py-1.5 text-xs" : "py-3 text-sm"
            }`}
          >
            Add to Cart
          </button>
          <button
            onClick={() => onViewDetails?.(id)}
            className={`bg-white text-[#735C00] rounded-lg border border-[#d0c5af]/30 hover:bg-white transition-all ${
              compact ? "p-1.5" : "p-3"
            }`}
            aria-label="View details"
          >
            <Eye size={compact ? 14 : 20} />
          </button>
        </div>
      </div>

      {/* Text */}
      <h4
        className={`font-headline text-[#1B1D0E] truncate ${
          compact ? "text-sm mb-0.5" : "text-xl mb-1"
        }`}
      >
        {displayName}
      </h4>
      {!compact && (
        <p className="text-[#4d4635] text-sm mb-3 font-light leading-relaxed line-clamp-2">
          {description}
        </p>
      )}
      <span
        className={`text-[#735C00] font-bold font-headline ${
          compact ? "text-sm" : "text-lg tracking-tight"
        }`}
      >
        {typeof price === "number" ? `$${price.toFixed(2)}` : price}
      </span>
    </div>
  );
};

export default GiftCard;
