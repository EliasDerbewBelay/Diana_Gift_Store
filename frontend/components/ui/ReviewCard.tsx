"use client";

import React from "react";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

export interface ReviewProps {
  id: string | number;
  name: string;
  role?: string;
  avatar: string;
  quote: string;
  rating: number; // e.g., 5
}

const ReviewCard: React.FC<ReviewProps> = ({
  name,
  role,
  avatar,
  quote,
  rating,
}) => {
  return (
    <div className="min-w-[320px] md:min-w-[400px] snap-start flex flex-col justify-between bg-white border border-[#D4AF37]/10 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Upper Section: Quote and Rating */}
      <div>
        <div className="flex justify-between items-center mb-5">
          <Quote size={32} className="text-[#D4AF37]/30" strokeWidth={1.5} />

          {/* Dynamic Gold Stars Generator */}
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, index) => (
              <Star
                key={index}
                size={16}
                className={
                  index < rating
                    ? "fill-[#D4AF37] text-[#D4AF37]"
                    : "text-neutral-200"
                }
              />
            ))}
          </div>
        </div>

        <p className="font-sans text-[#1B1D0E]/80 text-base leading-relaxed italic mb-6">
          &quot;{quote}&quot;
        </p>
      </div>

      {/* Lower Section: User Info */}
      <div className="flex items-center gap-4 pt-4 border-t border-[#FBFBE2]">
        <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#D4AF37]/20">
          <Image
            src={avatar}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h4 className="font-serif font-bold text-[#1B1D0E] text-base">
            {name}
          </h4>
          {role && (
            <p className="font-sans text-xs uppercase tracking-wider text-[#735C00] font-semibold">
              {role}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
