import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FBFBE2] font-body text-[#1B1D0E] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Decorative number */}
        <p className="font-headline text-[12rem] leading-none text-[#d4af37]/20 select-none">
          404
        </p>

        <div className="-mt-10 relative z-10">
          <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6">
            <SearchX className="text-[#735C00]" size={36} />
          </div>
          <span className="font-label uppercase tracking-[0.2em] text-xs text-[#735C00]">
            Page Not Found
          </span>
          <h1 className="font-headline text-4xl mt-3 mb-4">
            This page doesn't exist
          </h1>
          <p className="text-[#4d4635] text-sm leading-relaxed mb-10 max-w-sm mx-auto">
            The page you're looking for may have been moved, renamed, or doesn't
            exist. Let's get you back on track.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#735C00] text-white rounded-xl font-label uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-lg"
            >
              <ArrowLeft size={14} />
              Back to Home
            </Link>
            <Link
              href="/gift"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-[#735C00] text-[#735C00] rounded-xl font-label uppercase tracking-widest text-xs hover:bg-[#735C00]/10 transition-all"
            >
              Browse Gifts
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
