'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { Product } from '@/types/product';
import { formatCurrency } from '@/utils/format';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const favorites = useFavoritesStore((state) => state.favorites);
  const isFavorite = favorites.includes(product.id);

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-soft transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-950">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-x-0 top-3 flex items-center justify-between px-4">
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-900 dark:bg-slate-950/80 dark:text-slate-100">
            {product.category}
          </span>
          <button
            type="button"
            onClick={() => toggleFavorite(product.id)}
            className="rounded-full bg-white/90 p-2 text-slate-900 transition hover:bg-brand-100 hover:text-brand-700 dark:bg-slate-950/80 dark:text-slate-100"
          >
            <Heart className={isFavorite ? 'text-brand-500' : ''} size={16} />
          </button>
        </div>
      </div>

      <div className="space-y-3 p-5">
        <Link href={`/product/${product.id}`} className="space-y-2">
          <h2 className="text-lg font-semibold text-slate-950 dark:text-white">{product.name}</h2>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            {product.description}
          </p>
        </Link>
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-semibold text-brand-600">
            {formatCurrency(product.price)}
          </span>
          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Star className="h-4 w-4 text-brand-500" />
            <span>4.9</span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => addItem(product)}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          <ShoppingBag className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </article>
  );
}
