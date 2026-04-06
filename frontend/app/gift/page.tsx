import React from "react";
import GiftsList from "@/components/sections/gift/GiftsList";
import { categories } from "@/constants";
import { productService } from "@/services/product.service";

// Set revalidation time for ISR
export const revalidate = 3600; // revalidate every hour

export default async function GiftsPage() {
  const products = await productService.getProducts();

  return (
    <div className="bg-[#FBFBE2] font-body text-[#1B1D0E] min-h-screen">
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-8">
        <GiftsList 
           initialProducts={products.map(p => ({
             ...p,
             rating: p.rating ?? 0,
             reviewCount: p.reviewCount ?? 0,
             category: p.category ?? undefined,
             badge: p.badge ?? undefined,
             discount: p.discount ?? undefined,
             originalPrice: p.originalPrice ?? undefined,
           }))} 
           categories={categories} 
        />
      </main>
    </div>
  );
}