"use client";

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode, useMemo } from "react";
import { useAuth } from "./AuthContext";
import { toast } from "sonner";

export interface CartItem {
  id: string;
  productId: number;
  quantity: number;
  monogram?: string | null;
  giftMsg?: string | null;
}

export interface WishlistItem {
  id: string;
  productId: number;
}

interface StoreContextType {
  cart: CartItem[];
  wishlist: WishlistItem[];
  isLoading: boolean;
  processingIds: Set<string | number>;
  addToCart: (productId: number, quantity: number, monogram?: string, giftMsg?: string) => Promise<void>;
  updateItemQuantity: (itemId: string, quantity: number) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  toggleWishlist: (productId: number) => Promise<void>;
  isInWishlist: (productId: number) => boolean;
  refreshStore: () => Promise<void>;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const { isGuest, openAuthModal } = useAuth();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<WishlistItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [processingIds, setProcessingIds] = useState<Set<string | number>>(new Set());

  const fetchCart = useCallback(async () => {
    try {
      const response = await fetch("/api/cart");
      if (response.ok) {
        const data = await response.json();
        // The API returns the cart object which contains items array
        setCart(data.items || []);
      }
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  }, []);

  const fetchWishlist = useCallback(async () => {
    try {
      const response = await fetch("/api/wishlist");
      if (response.ok) {
        const data = await response.json();
        setWishlist(data.items || []);
      }
    } catch (error) {
      console.error("Error fetching wishlist:", error);
    }
  }, []);

  const refreshStore = useCallback(async () => {
    if (!isGuest) {
      setIsLoading(true);
      await Promise.all([fetchCart(), fetchWishlist()]);
      setIsLoading(false);
    } else {
      setCart([]);
      setWishlist([]);
    }
  }, [isGuest, fetchCart, fetchWishlist]);

  useEffect(() => {
    refreshStore();
  }, [refreshStore]);

  const addToCart = async (productId: number, quantity: number, monogram?: string, giftMsg?: string) => {
    if (isGuest) {
      openAuthModal();
      return;
    }

    setProcessingIds(prev => new Set(prev).add(productId));
    // Optimistic Update
    setCart((prev) => {
      const existing = prev.find(item => item.productId === productId && item.monogram === monogram);
      if (existing) {
        return prev.map(item => item.id === existing.id ? { ...item, quantity: item.quantity + quantity } : item);
      }
      return [...prev, { id: `temp-${Date.now()}`, productId, quantity, monogram, giftMsg }];
    });

    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: Number(productId), quantity, monogram, giftMsg }),
      });

      const data = await response.json();
      console.log("Cart API RESPONSE:", data);

      if (!response.ok || data.success === false) {
        throw new Error(data.error || "Failed to add to cart");
      }
      toast.success("Added to cart");
      await fetchCart();
    } catch (error: any) {
      console.error("Error adding to cart:", error);
      toast.error(error.message || "Failed to add to cart");
      await fetchCart();
    } finally {
      setProcessingIds(prev => {
        const next = new Set(prev);
        next.delete(productId);
        return next;
      });
    }
  };

  const updateItemQuantity = async (itemId: string, quantity: number) => {
    if (isGuest || quantity < 1) return;

    setProcessingIds(prev => new Set(prev).add(itemId));
    // Optimistic Update
    setCart((prev) => prev.map(item => item.id === itemId ? { ...item, quantity } : item));

    try {
      const item = cart.find(i => i.id === itemId);
      if (!item) return;

      const diff = quantity - item.quantity;
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: item.productId, quantity: diff, monogram: item.monogram }),
      });
      const data = await response.json();
      if (!response.ok || data.success === false) {
        throw new Error(data.error || "Failed to update quantity");
      }
      toast.success("Quantity updated");
      await fetchCart();
    } catch (error: any) {
      console.error("Error updating quantity:", error);
      toast.error(error.message || "Failed to update quantity");
      await fetchCart();
    } finally {
      setProcessingIds(prev => {
        const next = new Set(prev);
        next.delete(itemId);
        return next;
      });
    }
  };

  const removeFromCart = async (itemId: string) => {
    if (isGuest) return;

    setProcessingIds(prev => new Set(prev).add(itemId));
    // Optimistic Update
    setCart((prev) => prev.filter(item => item.id !== itemId));

    try {
      const response = await fetch(`/api/cart?itemId=${itemId}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!response.ok || data.success === false) {
        throw new Error(data.error || "Failed to remove from cart");
      }
      toast.success("Removed from cart");
      await fetchCart();
    } catch (error: any) {
      console.error("Error removing from cart:", error);
      toast.error(error.message || "Failed to remove from cart");
      await fetchCart();
    } finally {
      setProcessingIds(prev => {
        const next = new Set(prev);
        next.delete(itemId);
        return next;
      });
    }
  };

  const toggleWishlist = async (productId: number) => {
    if (isGuest) {
      openAuthModal();
      return;
    }

    setProcessingIds(prev => new Set(prev).add(productId));
    const exists = wishlist.some(i => i.productId === productId);
    
    // Optimistic Update
    if (exists) {
      setWishlist((prev) => prev.filter(item => item.productId !== productId));
    } else {
      setWishlist((prev) => [...prev, { id: `temp-w-${Date.now()}`, productId }]);
    }

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId: Number(productId) }),
      });

      const data = await response.json();
      console.log("Wishlist API RESPONSE:", data);

      if (!response.ok) {
        throw new Error(data.error || "Failed to toggle wishlist");
      }
      
      if (data.removed) {
        toast.success("Removed from wishlist");
      } else {
        toast.success("Added to wishlist");
      }
      
      await fetchWishlist();
    } catch (error: any) {
      console.error("Error toggling wishlist:", error);
      toast.error(error.message || "Failed to update wishlist");
      await fetchWishlist();
    } finally {
      setProcessingIds(prev => {
        const next = new Set(prev);
        next.delete(productId);
        return next;
      });
    }
  };

  const isInWishlist = useCallback((productId: number) => {
    return wishlist.some((item) => item.productId === productId);
  }, [wishlist]);

  const value = useMemo(() => ({
    cart,
    wishlist,
    isLoading,
    processingIds,
    addToCart,
    updateItemQuantity,
    removeFromCart,
    toggleWishlist,
    isInWishlist,
    refreshStore,
  }), [cart, wishlist, isLoading, processingIds, fetchCart, fetchWishlist, refreshStore, isInWishlist]);

  return (
    <StoreContext.Provider value={value}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
