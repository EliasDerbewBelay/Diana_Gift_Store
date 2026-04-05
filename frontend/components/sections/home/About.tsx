'use client';

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Quote, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBE2] overflow-hidden">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Image Side (7 Columns) */}
          <div className="lg:col-span-7 relative">
            
            {/* Main Portrait Box */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-[#D4AF37]/10 bg-white">
              <Image
                className="object-cover object-center transform hover:scale-105 transition-transform duration-700"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000" 
                alt="Portrait of Diana, a sophisticated woman with a warm smile in a luxury boutique setting"
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              {/* Subtle ambient gradient over the image for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#735C00]/20 to-transparent" />
            </div>
            
            {/* Floating Quote Card (Hidden on very small screens, responsive scale) */}
            <div className="absolute -bottom-6 -right-4 md:-bottom-10 md:-right-6 hidden sm:block w-64 md:w-80 bg-gradient-to-br from-[#735C00] to-[#D4AF37] rounded-xl p-6 md:p-8 text-white shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
              <Quote className="text-white/60 mb-3" size={32} strokeWidth={1.5} />
              <p className="font-serif italic text-base md:text-lg leading-relaxed text-white">
                "Every gift is a bridge between hearts. I curate only the finest
                to make those connections last forever."
              </p>
              
              {/* Decorative corner accents */}
              <div className="absolute top-4 right-4 w-2 h-2 border-t border-r border-white/40" />
              <div className="absolute bottom-4 left-4 w-2 h-2 border-b border-l border-white/40" />
            </div>
          </div>
          
          {/* Content Side (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col items-start mt-8 lg:mt-0">
            
            {/* Section Tag */}
            <span className="inline-flex items-center gap-2 text-[#735C00] font-sans uppercase tracking-[0.2em] text-xs sm:text-sm font-semibold mb-4">
              <span className="w-6 h-[1px] bg-[#D4AF37]"></span>
              The Curator
            </span>
            
            {/* Heading */}
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1B1D0E] leading-tight mb-6">
              Meet Diana
            </h2>
            
            {/* Story Paragraphs */}
            <div className="space-y-5 text-[#1B1D0E]/80 font-sans text-base leading-relaxed">
              <p>
                For over a decade, I have been obsessed with the art of gifting.
                What started as a personal passion for finding the perfect
                "un-findable" item evolved into a mission to bring luxury and
                emotion together.
              </p>
              <p>
                Each piece in this store is personally vetted for its
                craftsmanship, story, and the "wow" factor it brings to the
                recipient. We don't just sell products; we facilitate
                unforgettable moments.
              </p>
            </div>
            
            {/* Primary Action Button */}
            <Link 
              href="/about" 
              className="group mt-8 inline-flex items-center gap-3 px-8 py-4 bg-transparent border-2 border-[#735C00] text-[#735C00] font-sans font-bold uppercase tracking-wider text-sm rounded-full hover:bg-[#735C00] hover:text-white transition-all duration-300 active:scale-95"
            >
              Read My Full Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;