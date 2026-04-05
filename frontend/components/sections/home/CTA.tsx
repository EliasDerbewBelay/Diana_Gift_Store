"use client";

import React from "react";

const CTA = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#735c00] to-[#d4af37] px-12 py-24 text-center text-white">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="grid grid-cols-6 h-full w-full">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="border-r border-white/30"></div>
              ))}
            </div>
          </div>

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-headline font-bold mb-8">
              Find the Perfect Gift Today
            </h2>
            <p className="text-xl mb-12 opacity-90 font-body leading-relaxed">
              Stop guessing. Start gifting with confidence. Our concierge is
              ready to help you craft the perfect gesture.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="bg-[#FBFBE2] text-[#735C00] px-12 py-5 rounded-full font-label uppercase tracking-widest text-lg font-bold shadow-2xl hover:scale-105 transition-transform">
                Get Started
              </button>
              <button className="bg-transparent border-2 border-white/50 text-white px-12 py-5 rounded-full font-label uppercase tracking-widest text-lg font-bold hover:bg-white/10 transition-colors">
                Gift Concierge
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
