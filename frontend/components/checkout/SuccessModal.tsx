'use client';

import { useEffect } from 'react';
import Link from 'next/link';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1b1d0e]/40 backdrop-blur-md">
      <div className="bg-[#fbfbe2] p-12 rounded-xl max-w-md w-full mx-4 text-center shadow-2xl animate-in fade-in zoom-in duration-300">
        <div className="w-20 h-20 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-8">
          <span
            className="material-symbols-outlined text-4xl text-[#554300]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>
        <h2 className="font-['Noto_Serif'] text-3xl text-[#1b1d0e] mb-4">Thank You</h2>
        <p className="text-[#4d4635] mb-10 leading-relaxed">
          Your order has been received. Our team will contact you shortly to confirm the delivery details.
        </p>
        <Link
          href="/"
          onClick={onClose}
          className="inline-block bg-[#735c00] text-[#ffffff] px-8 py-3 rounded-full font-medium hover:scale-105 transition-all"
        >
          Back to Store
        </Link>
      </div>
    </div>
  );
}