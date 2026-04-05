"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  Heart,
  ChevronRight,
  ChevronLeft,
  Minus,
  Plus,
  Truck,
  Gift,
  Verified,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

import { mockProductsData } from "@/constants";

const ProductDetailPage = () => {
  const params = useParams();
  const productId = parseInt(params.id as string);
  const product = mockProductsData[productId as keyof typeof mockProductsData];

  const [quantity, setQuantity] = useState(1);
  const [monogram, setMonogram] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FBFBE2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-headline text-[#1B1D0E] mb-4">
            Product Not Found
          </h1>
          <Link href="/gift" className="text-[#735C00] hover:underline">
            Back to Gifts
          </Link>
        </div>
      </div>
    );
  }

  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="bg-[#FBFBE2] text-[#1B1D0E] font-body">
      <main className="pt-32 pb-24 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-12 flex items-center gap-2 text-sm font-label uppercase tracking-widest opacity-60">
          <Link href="/" className="hover:text-[#735C00] transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link
            href="/gift"
            className="hover:text-[#735C00] transition-colors"
          >
            Curated Gifts
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#735C00] font-bold">{product.name}</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Gallery */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative group aspect-[4/5] rounded-lg overflow-hidden bg-[#f5f5dc]">
              <Image
                src={product.images.thumbnails[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Favorite Button */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-6 right-6 w-14 h-14 bg-white/70 backdrop-blur-md rounded-full flex items-center justify-center text-[#735C00] shadow-xl hover:scale-110 transition-transform"
              >
                <Heart size={24} fill={isWishlisted ? "#735C00" : "none"} />
              </button>

              {/* Navigation Arrows */}
              <button className="absolute left-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronLeft size={20} />
              </button>
              <button className="absolute right-6 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Thumbnails */}
            <div className="grid grid-cols-4 gap-4">
              {product.images.thumbnails.map((img: string, index: number) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selectedImage === index
                      ? "ring-2 ring-[#735C00] ring-offset-2 ring-offset-[#FBFBE2]"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Product view ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-5 flex flex-col pt-4">
            <span className="font-label uppercase tracking-[0.2em] text-xs text-[#735C00] mb-2">
              {product.category}
            </span>
            <h1 className="font-headline text-5xl lg:text-6xl text-[#1B1D0E] leading-tight mb-6">
              {product.name}
            </h1>

            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-3xl font-headline text-[#735C00]">
                ${product.price.toFixed(2)}
              </span>
              <span className="text-sm font-label uppercase tracking-widest opacity-50">
                Inclusive of all taxes
              </span>
            </div>

            <div className="space-y-6 text-[#4d4635] leading-relaxed mb-10 text-lg font-light">
              <p>{product.description}</p>
              <p>{product.fullDescription}</p>
            </div>

            {/* Quantity and Monogram */}
            <div className="flex items-center gap-8 mb-12">
              <div className="flex flex-col gap-2">
                <span className="font-label uppercase text-[10px] tracking-widest opacity-60">
                  Quantity
                </span>
                <div className="flex items-center border-b-2 border-[#d0c5af] py-2 gap-6">
                  <button
                    onClick={decreaseQuantity}
                    className="hover:text-[#735C00] transition-colors"
                  >
                    <Minus size={20} />
                  </button>
                  <span className="text-lg font-bold w-4 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={increaseQuantity}
                    className="hover:text-[#735C00] transition-colors"
                  >
                    <Plus size={20} />
                  </button>
                </div>
              </div>

              <div className="flex-grow">
                <span className="font-label uppercase text-[10px] tracking-widest opacity-60">
                  Box Monogram
                </span>
                <div className="border-b-2 border-[#d0c5af] py-2">
                  <input
                    className="bg-transparent border-none w-full focus:ring-0 p-0 text-[#1B1D0E] placeholder:opacity-30 outline-none"
                    placeholder="Add initials (Optional)"
                    type="text"
                    value={monogram}
                    onChange={(e) => setMonogram(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Conversion Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button className="py-5 px-8 rounded-xl border border-[#d0c5af] font-label uppercase tracking-widest text-sm hover:bg-[#f5f5dc] transition-all hover:scale-[1.02]">
                Add to Cart
              </button>
              <button className="py-5 px-8 rounded-xl bg-gradient-to-r from-[#735C00] to-[#d4af37] text-white font-label uppercase tracking-widest text-sm font-bold shadow-xl hover:scale-[1.02] transition-all">
                Order Now
              </button>
            </div>

            {/* Trust Badges */}
            <div className="mt-16 pt-8 border-t border-[#d0c5af]/30 grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="text-[#d4af37]" size={24} />
                <span className="text-[10px] font-label uppercase tracking-tighter opacity-70">
                  Express Global Delivery
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Gift className="text-[#d4af37]" size={24} />
                <span className="text-[10px] font-label uppercase tracking-tighter opacity-70">
                  Luxury Gift Wrap
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <Verified className="text-[#d4af37]" size={24} />
                <span className="text-[10px] font-label uppercase tracking-tighter opacity-70">
                  Artisan Authenticity
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products Section */}
        <section className="mt-32">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="font-label uppercase tracking-[0.2em] text-xs text-[#735C00]">
                Discover More
              </span>
              <h2 className="font-headline text-3xl mt-2">
                Recommended for You
              </h2>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-[#d0c5af] hover:bg-[#735C00] hover:text-white transition-all">
                <ArrowLeft size={20} />
              </button>
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-[#d0c5af] hover:bg-[#735C00] hover:text-white transition-all">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Horizontal Scroll Grid */}
          <div className="flex gap-8 overflow-x-auto hide-scrollbar pb-8 snap-x">
            {product.relatedProducts.map((relatedProduct: any) => (
              <Link
                key={relatedProduct.id}
                href={`/gift/${relatedProduct.id}`}
                className="min-w-[300px] md:min-w-[400px] snap-start group cursor-pointer"
              >
                <div className="aspect-[3/4] rounded-lg overflow-hidden mb-6 bg-[#f5f5dc]">
                  <Image
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    width={400}
                    height={533}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline text-xl text-[#1B1D0E]">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm font-label uppercase tracking-widest opacity-50 mt-1">
                      {relatedProduct.series}
                    </p>
                  </div>
                  <span className="font-headline text-[#735C00]">
                    ${relatedProduct.price.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductDetailPage;
