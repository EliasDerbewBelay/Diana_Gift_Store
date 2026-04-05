"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingBag, Eye, Star, ChevronRight } from "lucide-react";

export interface GiftCardProps {
  id: string | number;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  category?: string;
  description?: string;
  rating?: number;
  reviewCount?: number;
  badge?: "new" | "trending" | "sale" | "limited";
  isInStock?: boolean;
  discount?: number;
}

const GiftCard: React.FC<GiftCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  category,
  description = "Exquisitely crafted gift perfect for any special occasion.",
  rating = 4.5,
  reviewCount = 24,
  badge,
  isInStock = true,
  discount,
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const discountPercentage =
    discount ||
    (originalPrice
      ? Math.round(
          ((parseFloat(originalPrice) - parseFloat(price)) /
            parseFloat(originalPrice)) *
            100,
        )
      : 0);

  const getBadgeStyles = () => {
    switch (badge) {
      case "new":
        return "bg-emerald-500";
      case "trending":
        return "bg-purple-500";
      case "sale":
        return "bg-red-500";
      case "limited":
        return "bg-amber-500";
      default:
        return discount ? "bg-red-500" : "";
    }
  };

  return (
    <div className="group w-[260px] sm:w-[280px] md:w-[300px] flex-shrink-0 snap-start">
      <div className="relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
        {/* Image Container - Reduced height from aspect-[4/5] to aspect-[3/4] */}
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          {!imageLoaded && (
            <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"></div>
          )}

          <Image
            src={image}
            alt={title}
            fill
            className={`object-cover transition-transform duration-500 group-hover:scale-105 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
            sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 300px"
            onLoad={() => setImageLoaded(true)}
          />

          {/* Badge - Smaller */}
          {(badge || discount) && (
            <div
              className={`absolute top-2 left-2 z-10 px-1.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider text-white shadow-lg ${getBadgeStyles()}`}
            >
              {badge === "new" && "Just In"}
              {badge === "trending" && "Hot"}
              {badge === "sale" && "Sale"}
              {badge === "limited" && "Limited"}
              {discount && !badge && `-${discountPercentage}%`}
            </div>
          )}

          {/* Like Button - Smaller */}
          <button
            onClick={handleLike}
            className="absolute top-2 right-2 z-10 p-1.5 rounded-full bg-white/90 backdrop-blur-sm shadow-md hover:scale-110 transition-transform"
          >
            <Heart
              className={`w-3.5 h-3.5 transition-colors ${
                isLiked
                  ? "fill-red-500 text-red-500"
                  : "text-gray-600"
              }`}
            />
          </button>

          {/* Overlay on Hover */}
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <Link
              href={`/gifts/${id}`}
              className="bg-white text-black px-3 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-wider transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#D4AF37] hover:text-black"
            >
              <Eye className="w-2.5 h-2.5 inline mr-1" />
              Quick View
            </Link>
          </div>
        </div>

        {/* Content - Reduced padding and spacing */}
        <div className="p-3">
          <div className="flex justify-between items-start mb-1">
            {category && (
              <span className="text-[9px] text-[#735C00] uppercase tracking-wider font-semibold">
                {category}
              </span>
            )}
            <div className="flex items-center gap-0.5">
              <Star className="w-2.5 h-2.5 fill-current text-[#D4AF37]" />
              <span className="text-[10px] font-medium text-gray-600">
                {rating}
              </span>
            </div>
          </div>

          <Link href={`/gifts/${id}`}>
            <h3 className="text-xs sm:text-sm font-serif font-bold text-[#1B1D0E] mb-1 line-clamp-2 hover:text-[#735C00] transition-colors leading-tight">
              {title}
            </h3>
          </Link>

          <p className="text-[10px] text-gray-500 mb-2 line-clamp-2 leading-relaxed">
            {description}
          </p>

          <div className="flex items-baseline gap-1.5 mb-2">
            <span className="text-sm font-bold text-[#1B1D0E]">
              {price}
            </span>
            {originalPrice && (
              <span className="text-[10px] text-gray-400 line-through">
                {originalPrice}
              </span>
            )}
          </div>

          {/* Add to Cart Button - Smaller */}
          {isInStock && (
            <button
              onClick={() => console.log("Add to cart:", id)}
              className="w-full mt-2 bg-[#D4AF37] text-black px-2 py-1.5 rounded-lg text-[10px] font-semibold uppercase tracking-wider hover:bg-[#C5A028] transition-colors flex items-center justify-center gap-1.5 group/btn"
            >
              <ShoppingBag className="w-2.5 h-2.5" />
              Add to Cart
              <ChevronRight className="w-2.5 h-2.5 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default GiftCard;