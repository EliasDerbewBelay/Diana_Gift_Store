'use client';

import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Gift, Star as StarIcon, ChevronRight, ChevronLeft } from 'lucide-react';
import GiftCard from '../../ui/GiftCard';
import { featuredGifts } from '@/constants';

const Feature = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const checkScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setShowLeft(scrollLeft > 0);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener('scroll', checkScroll);
    checkScroll();
    return () => el.removeEventListener('scroll', checkScroll);
  }, []);

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return;
    // Scroll by one card width at a time
    const cardWidth = scrollRef.current.clientWidth / 4;
    scrollRef.current.scrollBy({ left: dir === 'left' ? -cardWidth : cardWidth, behavior: 'smooth' });
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#FBFBE2] to-[#FFF8E7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8 md:mb-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#735C00] font-semibold">
                Curated For You
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1B1D0E] mb-2">
              The Signature{' '}
              <span className="text-[#D4AF37]">Collection</span>
            </h2>
            <p className="text-sm text-gray-600 max-w-2xl">
              Discover our most exclusive hand-picked gifts — each piece tells a unique story
              of craftsmanship and elegance.
            </p>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#D4AF37] to-[#735C00] rounded-full" />
              <div className="h-0.5 w-6 bg-[#D4AF37]/30 rounded-full" />
              <div className="h-0.5 w-3 bg-[#D4AF37]/20 rounded-full" />
            </div>
          </div>

          {/* Meta + arrows */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs text-gray-600">{featuredGifts.length}+ Gifts</span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <StarIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs text-gray-600">4.8 ★ Rating</span>
            </div>

            {/* Arrow controls */}
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                disabled={!showLeft}
                aria-label="Scroll left"
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                  showLeft
                    ? 'bg-[#D4AF37] text-black hover:bg-[#C5A028] hover:scale-105 shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!showRight}
                aria-label="Scroll right"
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                  showRight
                    ? 'bg-[#D4AF37] text-black hover:bg-[#C5A028] hover:scale-105 shadow-md'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Single-row horizontal scroll — 4 cards visible at once on lg */}
        <div className="relative">
          {/* Left fade edge */}
          {showLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FBFBE2] to-transparent z-10 pointer-events-none" />
          )}
          {/* Right fade edge */}
          {showRight && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FFF8E7] to-transparent z-10 pointer-events-none" />
          )}

          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto scroll-smooth pb-4 featured-hscroll"
          >
            {featuredGifts.map((gift, index) => (
              <div
                key={gift.id}
                className="animate-fadeIn flex-none"
                style={{
                  // Show exactly 4 on lg, 2.2 on sm, 1.2 on mobile
                  width: 'calc((100%) / 4 - 15px)',
                  minWidth: '220px',
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                <GiftCard
                  id={gift.id}
                  image={gift.image}
                  title={gift.title}
                  price={gift.price}
                  originalPrice={gift.originalPrice}
                  category={gift.category}
                  description={gift.description}
                  rating={gift.rating}
                  reviewCount={gift.reviewCount}
                  badge={gift.badge}
                  discount={gift.discount}
                  isInStock={true}
                  compact={true}
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="text-center mt-8 md:mt-10">
          <Link
            href="/gift"
            className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-[#D4AF37] text-[#735C00] rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-105"
          >
            <span>View All Collection</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      <style jsx global>{`
        .featured-hscroll {
          scrollbar-width: thin;
          scrollbar-color: #d4af37 #f5f5dc;
        }
        .featured-hscroll::-webkit-scrollbar {
          height: 4px;
        }
        .featured-hscroll::-webkit-scrollbar-track {
          background: #f5f5dc;
          border-radius: 10px;
        }
        .featured-hscroll::-webkit-scrollbar-thumb {
          background: #d4af37;
          border-radius: 10px;
        }
        .featured-hscroll::-webkit-scrollbar-thumb:hover {
          background: #c5a028;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
};

export default Feature;