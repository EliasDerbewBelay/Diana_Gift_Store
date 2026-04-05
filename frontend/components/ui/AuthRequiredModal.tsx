"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { X, Lock } from "lucide-react";
import { useAuth } from "@/context/AuthContext";

export default function AuthRequiredModal() {
  const { isModalOpen, closeAuthModal } = useAuth();
  const [mounted, setMounted] = useState(false);

  // Handle SSR and mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  // Handle body scroll locking and Escape key
  useEffect(() => {
    if (!isModalOpen) return;

    // Prevent body scrolling avoiding layout jump by applying inline styling
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // Escape listener
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeAuthModal();
    };
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = originalStyle;
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isModalOpen, closeAuthModal]);

  if (!mounted || !isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-[#1B1D0E]/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeAuthModal}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative w-full max-w-md bg-[#FBFBE2] rounded-2xl shadow-2xl p-8 overflow-hidden animate-in fade-in zoom-in-95 duration-200"
      >
        <button
          onClick={closeAuthModal}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-[#f5f5dc] text-[#4d4635] hover:bg-[#735C00] hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={16} />
        </button>

        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-[#f5f5dc] flex items-center justify-center mb-6">
            <Lock className="text-[#735C00]" size={28} />
          </div>

          <h2
            id="modal-title"
            className="font-headline text-3xl text-[#1B1D0E] mb-3 leading-tight"
          >
            Access Required
          </h2>

          <p className="font-light text-sm text-[#4d4635] mb-8 leading-relaxed px-2">
            Join Diana Gift Store to build your curated wishlist, ensure seamless checkouts, and unlock exclusive artisan offers!
          </p>

          <div className="w-full space-y-3">
            <Link
              href="/auth/register"
              onClick={closeAuthModal}
              className="w-full flex items-center justify-center py-4 px-6 rounded-xl bg-gradient-to-r from-[#735C00] to-[#d4af37] text-white font-label uppercase tracking-widest text-xs font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            >
               Register Now
            </Link>

            <Link
              href="/auth/login"
              onClick={closeAuthModal}
              className="w-full flex justify-center py-4 px-6 rounded-xl border border-[#d0c5af] text-[#1B1D0E] font-label uppercase tracking-widest text-xs font-bold hover:bg-[#f5f5dc] transition-all active:scale-[0.98]"
            >
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
