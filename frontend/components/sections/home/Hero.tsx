"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:h-screen w-full flex items-center overflow-hidden bg-[#FBFBE2] dark:bg-[#1A1A1A]">
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          alt="Luxury Gift Presentation - Close-up of a beautifully wrapped gift box with a silk gold ribbon"
          src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2040&auto=format&fit=crop" // Placeholder high-quality gift image
          fill
          priority
          className="object-cover object-center transition-opacity duration-700"
          sizes="100vw"
        />

        {/* Subtle dark/light gradient overlay to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FBFBE2] via-[#FBFBE2]/70 to-transparent dark:from-[#1A1A1A] dark:via-[#1A1A1A]/80 dark:to-transparent z-10" />

        {/* Bottom edge fade to smoothly transition into the next landing page section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FBFBE2] dark:from-[#1A1A1A] to-transparent z-10" />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-6 sm:px-12 lg:px-16 relative z-20 mt-16 md:mt-0">
        <div className="max-w-3xl">
          {/* Sub-label */}
          <span className="inline-flex items-center gap-2 text-[#735C00] dark:text-[#D4AF37] font-sans uppercase tracking-[0.25em] text-xs sm:text-sm font-semibold mb-4 sm:mb-6">
            <span className="w-8 h-[1px] bg-[#D4AF37]"></span>
            Exquisite Selection
          </span>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#1B1D0E] dark:text-[#FBFBE2] leading-[1.1] tracking-tight mb-6 italic">
            Make Every Gift <br />
            <span className="text-[#735C00] dark:text-[#D4AF37] not-italic font-sans font-extrabold bg-gradient-to-r from-[#735C00] to-[#D4AF37] dark:from-[#D4AF37] dark:to-[#FBFBE2] bg-clip-text text-transparent">
              Memorable
            </span>
          </h1>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-xl text-[#1B1D0E]/80 dark:text-[#FBFBE2]/80 font-sans leading-relaxed mb-8 md:mb-10 max-w-xl">
            Curating luxury experiences that transcend the ordinary. Discover
            the art of thoughtful giving with Diana's hand-picked collection.
          </p>

          {/* Call To Action Buttons */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6">
            <Link
              href="/gifts"
              className="group inline-flex justify-center items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#735C00] to-[#D4AF37] text-white text-sm sm:text-base font-sans font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-lg hover:shadow-xl hover:brightness-110 active:scale-100"
            >
              Browse Gifts
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>

            <Link
              href="/about"
              className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white/40 dark:bg-neutral-800/40 backdrop-blur-md border border-[#735C00]/20 dark:border-[#D4AF37]/20 text-[#1B1D0E] dark:text-[#FBFBE2] text-sm sm:text-base font-sans font-bold uppercase tracking-widest hover:bg-white/60 dark:hover:bg-neutral-800/60 transition-all hover:border-[#D4AF37] active:scale-100"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
