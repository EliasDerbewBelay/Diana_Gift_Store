"use client";

import Link from "next/link";
import Image from "next/image";
import { ShoppingCart, ArrowLeft, PackageOpen, Trash2, Plus, Minus, CreditCard, Heart } from "lucide-react";
import { useStore } from "@/context/StoreContext";
import { mockProductsData } from "@/constants";

export default function CartPage() {
  const { cart, removeFromCart, updateItemQuantity, toggleWishlist, isLoading, processingIds } = useStore();

  const cartItems = cart.map((item) => {
    const product = mockProductsData[item.productId as keyof typeof mockProductsData];
    return {
      ...item,
      product,
    };
  });

  const handleMoveToWishlist = async (item: any) => {
    // Add to wishlist then remove from cart
    await toggleWishlist(item.productId);
    await removeFromCart(item.id);
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + (item.product?.price || 0) * item.quantity,
    0
  );
  const shipping = subtotal > 0 ? 15 : 0;
  const total = subtotal + shipping;

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#FBFBE2] flex items-center justify-center">
        <div className="animate-pulse text-[#735C00] font-label uppercase tracking-widest">Loading your cart...</div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#FBFBE2] font-body text-[#1B1D0E] flex flex-col items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6">
            <ShoppingCart className="text-[#735C00]" size={36} />
          </div>
          <span className="font-label uppercase tracking-[0.2em] text-xs text-[#735C00]">
            Your Cart
          </span>
          <h1 className="font-headline text-4xl mt-3 mb-4">Your cart is empty</h1>
          <p className="text-[#4d4635] text-sm leading-relaxed mb-10">
            Looks like you haven't added any gifts yet. Browse our curated
            collection and find something truly special.
          </p>
          <Link
            href="/gift"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#735C00] text-white rounded-xl font-label uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg"
          >
            <PackageOpen size={16} />
            Browse Gifts
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
          <ShoppingCart className="text-[#735C00]" size={28} />
          <h1 className="font-headline text-3xl sm:text-4xl">Shopping Cart</h1>
          <span className="ml-2 px-3 py-1 bg-[#735C00]/10 text-[#735C00] rounded-full text-xs font-bold font-label uppercase">
            {cart.length} {cart.length === 1 ? 'Item' : 'Items'}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Cart Items List */}
          <div className="lg:col-span-8 space-y-6">
            {cartItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white/40 backdrop-blur-sm rounded-2xl p-4 sm:p-6 flex flex-col sm:flex-row gap-6 border border-[#d0c5af]/30 hover:border-[#735C00]/30 transition-all shadow-sm hover:shadow-md"
              >
                {/* Product Image */}
                <div className="w-full sm:w-32 aspect-[4/5] rounded-xl overflow-hidden bg-[#f5f5dc] flex-shrink-0">
                  {item.product && (
                    <Image
                      src={item.product.images.thumbnails[0]}
                      alt={item.product.name}
                      width={128}
                      height={160}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-grow flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-headline text-xl mb-1">{item.product?.name}</h3>
                        <p className="text-[10px] font-label uppercase tracking-widest text-[#735C00] opacity-70">
                          {item.product?.category}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button 
                          onClick={() => handleMoveToWishlist(item)}
                          disabled={processingIds.has(item.id) || processingIds.has(item.productId)}
                          className="p-2 text-[#735C00] hover:bg-[#735C00]/10 rounded-full transition-all text-xs font-label uppercase tracking-widest flex items-center gap-2"
                          title="Move to Wishlist"
                        >
                          <Heart size={16} />
                          <span className="hidden sm:inline">Move to Wishlist</span>
                        </button>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          disabled={processingIds.has(item.id)}
                          className="p-2 text-[#4d4635] hover:text-red-500 hover:bg-red-50 rounded-full transition-all"
                          aria-label="Remove item"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>

                    {item.monogram && (
                      <div className="mt-3 inline-flex items-center gap-2 px-3 py-1 bg-[#FBFBE2] border border-[#d0c5af]/50 rounded-lg text-[10px] font-label uppercase tracking-widest">
                        <span className="opacity-50">Monogram:</span>
                        <span className="font-bold text-[#735C00]">{item.monogram}</span>
                      </div>
                    )}
                  </div>

                  <div className="flex justify-between items-end mt-4">
                    <div className={`flex items-center border border-[#d0c5af] rounded-lg p-1 gap-4 bg-white/50 transition-opacity ${processingIds.has(item.id) ? 'opacity-50 pointer-events-none' : ''}`}>
                      <button 
                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:text-[#735C00] transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus size={14} />
                      </button>
                      <span className="text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                      <button 
                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:text-[#735C00] transition-colors"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <div className="text-right">
                      <span className="text-xs opacity-50 block mb-1">Price</span>
                      <span className="font-headline text-lg text-[#735C00]">
                        ${((item.product?.price || 0) * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <Link
              href="/gift"
              className="inline-flex items-center gap-2 text-[#735C00] text-xs font-label uppercase tracking-widest hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft size={14} />
              Continue Shopping
            </Link>
          </div>

          {/* Summary Sidebar */}
          <div className="lg:col-span-4">
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-[#d0c5af]/40 shadow-xl sticky top-28">
              <h2 className="font-headline text-2xl mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-sm">
                  <span className="opacity-60">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-60">Shipping</span>
                  <span className="font-medium">${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="opacity-60">Estimated Taxes</span>
                  <span className="font-medium">$0.00</span>
                </div>
                <div className="pt-4 border-t border-[#d0c5af]/30 flex justify-between items-baseline">
                  <span className="font-headline text-lg">Total</span>
                  <span className="font-headline text-2xl text-[#735C00]">${total.toFixed(2)}</span>
                </div>
              </div>

              <button className="w-full py-4 bg-[#735C00] hover:bg-[#5a4800] text-white rounded-xl font-label uppercase tracking-[0.2em] text-xs font-bold shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
                <CreditCard size={18} />
                Secure Checkout
              </button>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-[10px] font-label uppercase tracking-tight text-[#735C00]/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#735C00]"></div>
                  Free delivery over $150
                </div>
                <div className="flex items-center gap-3 text-[10px] font-label uppercase tracking-tight text-[#735C00]/70">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#735C00]"></div>
                  Complimentary gift wrapping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
