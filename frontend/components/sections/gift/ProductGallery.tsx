"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Heart, ChevronLeft, ChevronRight } from "lucide-react";
import { useAuth } from "@/context/AuthContext";
import { useStore } from "@/context/StoreContext";

interface ProductGalleryProps {
  productId: string;
  images: string[];
  productName: string;
}

const ProductGallery = ({ productId, images, productName }: ProductGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState(0);
  const { requireAuth } = useAuth();
  const { toggleWishlist, isInWishlist } = useStore();
  const isWishlisted = isInWishlist(productId);

  return (
    <div className="lg:col-span-5 space-y-4">
      <div className="relative group aspect-[4/5] rounded-lg overflow-hidden bg-[#f5f5dc]">
        <Image
          src={images[selectedImage]}
          alt={productName}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform transform-gpu"
        />

        {/* Favorite Button */}
        <button
          onClick={() => requireAuth(() => toggleWishlist(productId))}
          className="absolute top-4 right-4 w-12 h-12 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-[#735C00] shadow-md hover:scale-110 transition-transform"
        >
          <Heart size={20} fill={isWishlisted ? "#735C00" : "none"} />
        </button>

        {/* Navigation Arrows */}
        <button 
          onClick={() => setSelectedImage((prev) => (prev > 0 ? prev - 1 : images.length - 1))}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={() => setSelectedImage((prev) => (prev < images.length - 1 ? prev + 1 : 0))}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img, index) => (
          <div
            key={index}
            onClick={() => setSelectedImage(index)}
            className={`relative aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
              selectedImage === index
                ? "ring-2 ring-[#735C00] ring-offset-2 ring-offset-[#FBFBE2]"
                : "opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={img}
              alt={`${productName} view ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
