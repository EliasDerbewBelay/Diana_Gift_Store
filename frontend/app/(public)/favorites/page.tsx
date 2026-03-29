"use client";

import Link from "next/link";
import { HeartOff } from "lucide-react";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/product/product-card";

export default function FavoritesPage() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const favoriteProducts = products.filter((product) => favorites.includes(product.id));

  if (favoriteProducts.length === 0) {
    return (
      <section className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <div className="text-center">
          <HeartOff className="mx-auto h-12 w-12 text-brand-500" />
          <h1 className="mt-6 text-3xl font-semibold text-slate-950 dark:text-white">No favorites yet</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Save artisan items to your favorites for faster checkout later.
          </p>
          <Link href="/products" className="mt-8 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">
            Browse products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Favorites</p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">Saved artisan picks.</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {favoriteProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
