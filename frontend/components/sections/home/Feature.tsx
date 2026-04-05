'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, Gift, Star as StarIcon } from 'lucide-react';
import GiftCard, { GiftCardProps } from '../../ui/GiftCard';

const Feature = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const featuredGifts: GiftCardProps[] = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=2000",
      title: "Aurelian Timeless Piece",
      price: "$1,250.00",
      originalPrice: "$1,500.00",
      category: "Signature",
      description: "Exquisite timepiece crafted with precision.",
      rating: 4.9,
      reviewCount: 128,
      badge: "new",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=2000",
      title: "Ethereal Bloom Essence",
      price: "$320.00",
      category: "Fragrance",
      description: "Captivating fragrance that lingers.",
      rating: 4.7,
      reviewCount: 89,
      badge: "trending",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?q=80&w=2000",
      title: "Nomad Heritage Set",
      price: "$890.00",
      originalPrice: "$1,120.00",
      category: "Travel",
      description: "Premium travel set for modern explorers.",
      rating: 4.8,
      reviewCount: 56,
      badge: "sale",
      discount: 20,
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1513519245088-0e12902e35ca?q=80&w=2000",
      title: "Celestial Crystal Suite",
      price: "$450.00",
      category: "Living",
      description: "Handcrafted crystal pieces for elegance.",
      rating: 4.6,
      reviewCount: 34,
      badge: "limited",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?q=80&w=2000",
      title: "Midnight Velvet Box",
      price: "$275.00",
      category: "Accessories",
      description: "Luxurious velvet box for precious items.",
      rating: 4.5,
      reviewCount: 42,
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?q=80&w=2000",
      title: "Royal Tea Collection",
      price: "$180.00",
      category: "Gourmet",
      description: "Premium tea from around the world.",
      rating: 4.9,
      reviewCount: 73,
    },
  ];

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => scrollContainer.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.8;

      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-[#FBFBE2] to-[#FFF8E7]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Area */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-8 md:mb-10">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#D4AF37]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#735C00] font-semibold">
                Curated For You
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#1B1D0E] mb-2">
              The Signature
              <span className="text-[#D4AF37]"> Collection</span>
            </h2>
            
            <p className="text-sm text-gray-600 max-w-2xl">
              Discover our most exclusive hand-picked gifts, each piece tells a unique story 
              of craftsmanship and elegance.
            </p>
            
            <div className="mt-3 flex items-center gap-2">
              <div className="h-0.5 w-12 bg-gradient-to-r from-[#D4AF37] to-[#735C00] rounded-full"></div>
              <div className="h-0.5 w-6 bg-[#D4AF37]/30 rounded-full"></div>
              <div className="h-0.5 w-3 bg-[#D4AF37]/20 rounded-full"></div>
            </div>
          </div>
          
          {/* Stats and Arrows */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex items-center gap-2">
              <Gift className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs text-gray-600">
                {featuredGifts.length}+ Gifts
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2">
              <StarIcon className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="text-xs text-gray-600">
                4.8 ★ Rating
              </span>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={() => scroll('left')}
                disabled={!showLeftArrow}
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                  showLeftArrow 
                    ? 'bg-[#D4AF37] text-black hover:bg-[#C5A028] hover:scale-105 shadow-md' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft size={16} className="sm:w-4 sm:h-4" />
              </button>
              <button 
                onClick={() => scroll('right')}
                disabled={!showRightArrow}
                className={`p-1.5 sm:p-2 rounded-full transition-all duration-300 ${
                  showRightArrow 
                    ? 'bg-[#D4AF37] text-black hover:bg-[#C5A028] hover:scale-105 shadow-md' 
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight size={16} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative">
          {showLeftArrow && (
            <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-[#FBFBE2] to-transparent z-10 pointer-events-none hidden lg:block"></div>
          )}
          {showRightArrow && (
            <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#FBFBE2] to-transparent z-10 pointer-events-none hidden lg:block"></div>
          )}
          
          <div 
            ref={scrollRef}
            className="flex gap-4 sm:gap-5 overflow-x-auto pb-4 snap-x scroll-smooth"
            style={{ 
              scrollbarWidth: 'thin',
              scrollbarColor: '#D4AF37 #F5F5DC'
            }}
          >
            {featuredGifts.map((gift, index) => (
              <div 
                key={gift.id}
                className="snap-start animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                />
              </div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8 md:mt-10">
          <button className="group inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-transparent border border-[#D4AF37] text-[#735C00] rounded-full font-semibold uppercase tracking-wider text-xs hover:bg-[#D4AF37] hover:text-black transition-all duration-300 hover:scale-105">
            <span>View All Collection</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .flex.overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }
        
        .flex.overflow-x-auto::-webkit-scrollbar-track {
          background: #F5F5DC;
          border-radius: 10px;
        }
        
        .flex.overflow-x-auto::-webkit-scrollbar-thumb {
          background: #D4AF37;
          border-radius: 10px;
        }
        
        .flex.overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #C5A028;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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