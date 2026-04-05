"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ReviewCard, { ReviewProps } from "@/components/ui/ReviewCard";

const Testimonies = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  // High-end placeholder testimonial data
  const customerReviews: ReviewProps[] = [
    {
      id: 1,
      name: "Sophia Reynolds",
      role: "Verified Buyer",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200",
      quote:
        "I ordered a personalized gift for my sister's wedding. The sheer attention to detail and luxury unboxing experience left us both completely speechless! Thank you, Diana.",
      rating: 5,
    },
    {
      id: 2,
      name: "Marcus Vance",
      role: "Corporate Client",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200",
      quote:
        "Finding high-quality corporate gifts that don't feel generic is incredibly hard. Diana's curated collections solved everything for our executive retreats. Truly top tier.",
      rating: 5,
    },
    {
      id: 3,
      name: "Elena Rostova",
      role: "Verified Buyer",
      avatar:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200",
      quote:
        "The boutique quality is immediately noticeable. Every single piece feels like it has an artful story behind it. This has instantly become my go-to store.",
      rating: 4,
    },
    {
      id: 4,
      name: "James Whitaker",
      role: "Verified Buyer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200",
      quote:
        "The admin reached out to me within a minute of placing my custom bundle to sort out logistics. You simply cannot buy that level of personal service anywhere else.",
      rating: 5,
    },
  ];

  // Manual smooth horizontal scroll calculation
  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-20 md:py-24 bg-[#FBFBE2] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        {/* Header Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-12 md:mb-16">
          <div>
            <span className="inline-flex items-center gap-2 text-[#735C00] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-3">
              <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
              Client Kind Words
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1B1D0E]">
              What Our Clients Say
            </h2>
          </div>

          {/* Slider Arrows */}
          <div className="flex gap-3">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-[#735C00]/20 text-[#735C00] hover:bg-[#735C00] hover:text-white transition-all"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-[#735C00]/20 text-[#735C00] hover:bg-[#735C00] hover:text-white transition-all"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Horizontal Card Container */}
        <div
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-auto pb-6 snap-x hide-scrollbar"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {customerReviews.map((review) => (
            <ReviewCard
              key={review.id}
              id={review.id}
              name={review.name}
              role={review.role}
              avatar={review.avatar}
              quote={review.quote}
              rating={review.rating}
            />
          ))}
        </div>
      </div>

      {/* Tailwind specific block for removing raw scrolling indicators */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Testimonies;
