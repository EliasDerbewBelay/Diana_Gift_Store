"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 md:py-24 bg-[#FBFBE2]">
      <div className="container mx-auto px-6 sm:px-12 lg:px-16">
        {/* Main Card Wrapper */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#735C00] to-[#D4AF37] px-8 py-16 md:py-24 text-center text-white shadow-2xl">
          {/* Architectural Geometric Background Grid */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 h-full w-full">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="border-r border-white/40 h-full"></div>
              ))}
              <div></div> {/* Last empty column */}
            </div>
          </div>

          {/* Subtle Ambient Radial Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-white/20 rounded-full blur-[100px] pointer-events-none z-0" />

          {/* Content Wrapper */}
          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            {/* Tiny Badge Above Title */}
            <span className="inline-flex items-center gap-2 mb-4 bg-white/20 px-4 py-1.5 rounded-full text-xs uppercase tracking-widest font-sans font-bold text-white backdrop-blur-sm">
              <Sparkles size={14} className="fill-white" />
              Elevate Your Gifting
            </span>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6 text-white leading-tight">
              Find the Perfect Gift Today
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-base md:text-lg mb-10 text-white/90 font-sans leading-relaxed max-w-2xl">
              Stop guessing. Start gifting with confidence. Our concierge is
              ready to help you craft the perfect gesture.
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
              {/* Primary Button */}
              <Link
                href="/gifts"
                className="group flex justify-center items-center gap-3 bg-[#FBFBE2] text-[#735C00] px-10 py-4.5 rounded-full font-sans uppercase tracking-widest text-sm font-bold shadow-xl hover:scale-105 transition-all duration-300 active:scale-95 hover:bg-white"
              >
                Get Started
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>

              {/* Secondary/Outline Button */}
              <Link
                href="/contact"
                className="flex justify-center items-center bg-transparent border-2 border-white/50 text-white px-10 py-4.5 rounded-full font-sans uppercase tracking-widest text-sm font-bold hover:bg-white/10 transition-all duration-300 active:scale-95"
              >
                Gift Concierge
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
