"use client";

import React from "react";
import Link from "next/link";
import { Mail, Share2, Globe } from "lucide-react";

const Footer = () => {
  // Dynamically get the current year for the copyright
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#FBFBE2] w-full border-t-0 flex flex-col items-center justify-center py-12 px-8 gap-6">
      {/* Brand Logo */}
      <div className="text-lg font-serif text-[#735C00] font-headline">
        Diana Gift Store
      </div>

      {/* Navigation Links */}
      <div className="flex flex-wrap justify-center gap-8 font-['Inter'] uppercase tracking-widest text-xs">
        <Link
          className="text-[#1B1D0E]/60 hover:text-[#D4AF37] transition-all opacity-100 hover:opacity-80"
          href="/"
        >
          Home
        </Link>
        <Link
          className="text-[#1B1D0E]/60 hover:text-[#D4AF37] transition-all opacity-100 hover:opacity-80"
          href="/gifts"
        >
          Gifts
        </Link>
        <Link
          className="text-[#1B1D0E]/60 hover:text-[#D4AF37] transition-all opacity-100 hover:opacity-80"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="text-[#1B1D0E]/60 hover:text-[#D4AF37] transition-all opacity-100 hover:opacity-80"
          href="/about"
        >
          About Me
        </Link>
        <Link
          className="text-[#1B1D0E]/60 hover:text-[#D4AF37] transition-all opacity-100 hover:opacity-80"
          href="/legal"
        >
          Legal Issues
        </Link>
      </div>

      {/* Social Media Icons */}
      <div className="flex gap-6 mt-4">
        <a
          href="mailto:contact@dianagifts.com"
          className="text-[#735C00] cursor-pointer hover:scale-110 transition-transform"
          aria-label="Email"
        >
          <Mail size={24} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#735C00] cursor-pointer hover:scale-110 transition-transform"
          aria-label="Share"
        >
          <Share2 size={24} />
        </a>
        <a
          href="https://dianagifts.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#735C00] cursor-pointer hover:scale-110 transition-transform"
          aria-label="Website"
        >
          <Globe size={24} />
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="text-[10px] text-[#1B1D0E]/40 mt-8 font-['Inter'] uppercase tracking-[0.2em] text-center">
        © {currentYear} Diana Gift Store. Curated with Love.
      </div>
    </footer>
  );
};

export default Footer;