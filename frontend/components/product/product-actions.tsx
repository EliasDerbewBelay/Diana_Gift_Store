'use client';

import { ShoppingBag, Heart, Clock } from 'lucide-react';
import { Product } from '@/types/product';
import { useCartStore } from '@/store/useCartStore';
import { useFavoritesStore } from '@/store/useFavoritesStore';
import { useWaitlistStore } from '@/store/useWaitlistStore';
import { Button } from '@/components/ui/button';

interface ProductActionsProps {
  product: Product;
}

export function ProductActions({ product }: ProductActionsProps) {
  const addItem = useCartStore((state) => state.addItem);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);
  const addToWaitlist = useWaitlistStore((state) => state.addToWaitlist);
  const favorites = useFavoritesStore((state) => state.favorites);
  const isFavorite = favorites.includes(product.id);

  return (
    <div className="grid gap-3">
      <Button type="button" className="w-full" onClick={() => addItem(product)}>
        <ShoppingBag className="mr-2 h-4 w-4" />
        Add to cart
      </Button>
      <div className="grid gap-3 sm:grid-cols-2">
        <Button type="button" variant="outline" onClick={() => toggleFavorite(product.id)}>
          <Heart className="mr-2 h-4 w-4" />
          {isFavorite ? 'Unfavorite' : 'Favorite'}
        </Button>
        <Button type="button" variant="outline" onClick={() => addToWaitlist(product.id)}>
          <Clock className="mr-2 h-4 w-4" />
          Waitlist
        </Button>
      </div>
    </div>
  );
}
