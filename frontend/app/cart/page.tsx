import Link from "next/link";
import { ShoppingCart, ArrowLeft, PackageOpen } from "lucide-react";

export default function CartPage() {
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
