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
  isWishlisted?: boolean;
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
  isWishlisted = false,
}) => {
  const [added, setAdded] = React.useState(false);
  const displayName = name || title || "";

  const handleCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart(id);
      setAdded(true);
      setTimeout(() => setAdded(false), 2000);
    }
  };

  const handleWishlistClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToWishlist?.(id);
  };

  const handleDetailsClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onViewDetails?.(id);
  };

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
          unoptimized
          className="object-cover transition-transform duration-700 group-hover:scale-110 will-change-transform transform-gpu"
        />

        {/* Wishlist Button */}
        <button
          onClick={handleWishlistClick}
          className={`absolute top-2.5 right-2.5 rounded-full transition-colors shadow-sm ${
            isWishlisted ? "bg-[#735C00] text-white" : "bg-white/80 hover:bg-white"
          } ${compact ? "p-1.5" : "p-2"}`}
          aria-label="Add to wishlist"
        >
          <Heart 
            className={isWishlisted ? "text-white" : "text-[#735C00]"} 
            size={compact ? 14 : 20} 
            fill={isWishlisted ? "currentColor" : "none"} 
          />
        </button>

        {/* Hover Actions */}
        <div
          className={`absolute inset-x-0 bottom-0 translate-y-full group-hover:translate-y-0 transition-transform duration-500 backdrop-blur-2xl bg-white/70 flex gap-2 ${
            compact ? "p-2.5" : "p-6"
          }`}
        >
          <button
            onClick={handleCartClick}
            disabled={added}
            className={`flex-1 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
              added 
                ? "bg-green-600 text-white cursor-default scale-95" 
                : "bg-[#735C00] text-white hover:brightness-110"
            } ${compact ? "py-1.5 text-xs" : "py-3 text-sm"}`}
          >
            {added ? "Added!" : "Add to Cart"}
          </button>
          <button
            onClick={handleDetailsClick}
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
