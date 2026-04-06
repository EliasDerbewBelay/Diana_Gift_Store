"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart, ArrowLeft, Sparkles, ShoppingCart, Trash2 } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { mockProductsData } from "@/constants";

export default function WishlistPage() {
  const { wishlist, toggleWishlist, addToCart, isLoading, processingIds } = useStore();

  const wishlistItems = wishlist.map((item) => {
    const product = mockProductsData[item.productId as keyof typeof mockProductsData];
    return {
      ...item,
      product,
    };
  });

  const handleMoveToCart = async (productId: number) => {
    await addToCart(productId, 1);
    await toggleWishlist(productId);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FBFBE2] flex items-center justify-center">
        <div className="animate-pulse text-[#735C00] font-label uppercase tracking-widest text-sm">Synchronizing your wishlist...</div>
      </div>
    );
  }

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen bg-[#FBFBE2] font-body text-[#1B1D0E] flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="text-[#735C00]" size={36} />
          </div>
          <span className="font-label uppercase tracking-[0.2em] text-xs text-[#735C00]">
            Your Wishlist
          </span>
          <h1 className="font-headline text-4xl mt-3 mb-4">Nothing saved yet</h1>
          <p className="text-[#4d4635] text-sm leading-relaxed mb-10">
            Save items you love by tapping the heart icon on any product. Your
            curated wishlist will appear here.
          </p>
          <Link
            href="/gift"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#735C00] text-white rounded-xl font-label uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg"
          >
            <Sparkles size={16} />
            Discover Gifts
          </Link>
          <div className="mt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[#735C00] text-xs font-label uppercase tracking-widest hover:opacity-70 transition-opacity"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBE2] font-body text-[#1B1D0E] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-10">
          <Heart className="text-[#735C00]" size={28} fill="#735C00" />
          <h1 className="font-headline text-3xl sm:text-4xl">Your Favorites</h1>
          <span className="ml-2 px-3 py-1 bg-[#735C00]/10 text-[#735C00] rounded-full text-xs font-bold font-label uppercase">
            {wishlist.length} {wishlist.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {wishlistItems.map((item) => (
            <div 
              key={item.id} 
              className="group bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#d0c5af]/30 hover:border-[#735C00]/30 transition-all shadow-sm hover:shadow-xl flex flex-col"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#f5f5dc]">
                {item.product && (
                  <>
                    <Image
                      src={item.product.images.thumbnails[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover transition-all duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500"></div>
                  </>
                )}
                
                {/* Remove button */}
                <button 
                  onClick={() => toggleWishlist(item.productId)}
                  disabled={processingIds.has(item.productId)}
                  className={`absolute top-4 right-4 w-9 h-9 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-red-500 shadow-md transition-all transform hover:scale-110 ${processingIds.has(item.productId) ? 'opacity-50 pointer-events-none' : 'hover:bg-red-50'}`}
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={16} />
                </button>
              </div>

              {/* Info & Actions */}
              <div className="p-5 flex-grow flex flex-col justify-between">
                <div>
                  <Link href={`/gift/${item.productId}`}>
                    <h3 className="font-headline text-lg group-hover:text-[#735C00] transition-colors">{item.product?.name}</h3>
                  </Link>
                  <p className="text-[10px] font-label uppercase tracking-widest text-[#735C00] opacity-60 mt-1">
                    {item.product?.category}
                  </p>
                  <p className="mt-3 font-headline text-xl text-[#1B1D0E]">
                    ${item.product?.price.toFixed(2)}
                  </p>
                </div>

                <div className="mt-6 flex flex-col gap-2">
                  <button 
                    onClick={() => handleMoveToCart(item.productId)}
                    disabled={processingIds.has(item.productId)}
                    className={`w-full py-3 bg-[#735C00] text-white rounded-xl font-label uppercase tracking-tighter text-[10px] font-bold shadow-lg transition-all flex items-center justify-center gap-2 ${processingIds.has(item.productId) ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02]'}`}
                  >
                    <ShoppingCart size={14} />
                    {processingIds.has(item.productId) ? "Moving..." : "Move to Cart"}
                  </button>
                  <Link 
                    href={`/gift/${item.productId}`}
                    className="w-full py-3 bg-white/50 text-[#1B1D0E] border border-[#d0c5af] rounded-xl font-label uppercase tracking-tighter text-[10px] font-bold hover:bg-white transition-all text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Link
            href="/gift"
            className="inline-flex items-center gap-2 text-[#735C00] text-xs font-label uppercase tracking-widest hover:translate-x-[-4px] transition-transform"
          >
            <ArrowLeft size={14} />
            Back to Discovery
          </Link>
        </div>
      </div>
    </div>
  );
}
