"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, Bell, LogOut, User, Menu, X } from "lucide-react";

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isActive = (path) => pathname === path;

  const navLinks = isLoggedIn
    ? [
        { name: "Home", href: "/" },
        { name: "Gifts", href: "/gifts" },
        { name: "About Me", href: "/about" },
        { name: "Contact Me", href: "/contact" },
      ]
    : [
        { name: "Home", href: "/" },
        { name: "Browse Gifts", href: "/gifts" },
        { name: "About Me", href: "/about" },
        { name: "Contact Me", href: "/contact" },
      ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#FBFBE2]/70 dark:bg-[#1A1A1A]/70 backdrop-blur-xl bg-surface-container-low/10 shadow-[0_64px_64px_-12px_rgba(27,29,14,0.06)]">
      <div className="flex justify-between items-center w-full px-6 py-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-serif italic text-[#735C00] dark:text-[#D4AF37] font-headline tracking-tight"
        >
          Diana Gift Store
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8 font-['Noto_Serif'] tracking-tight">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`pb-1 transition-all duration-200 ${
                isActive(link.href)
                  ? "text-[#735C00] dark:text-[#D4AF37] border-b-2 border-[#D4AF37] font-bold"
                  : "text-[#1B1D0E] dark:text-[#FBFBE2] opacity-80 hover:scale-105 hover:text-[#735C00] dark:hover:text-[#D4AF37]"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Buttons & Icons */}
        <div className="flex items-center gap-4 text-[#735C00] dark:text-[#D4AF37]">
          {/* Action Icons */}
          <div className="flex items-center gap-4 mr-2">
            {isLoggedIn ? (
              <>
                <Link
                  href="/cart"
                  className="relative hover:scale-110 transition-transform"
                >
                  <ShoppingCart size={24} />
                  {/* Glowing notification ping for cart items */}
                  <span className="absolute -top-1 -right-1 h-2 w-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
                </Link>
                <Link
                  href="/favorites"
                  className="hover:scale-110 transition-transform"
                >
                  <Heart size={24} />
                </Link>
                <Link
                  href="/notifications"
                  className="hover:scale-110 transition-transform"
                >
                  <Bell size={24} />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/favorites"
                  className="hover:scale-110 transition-transform"
                >
                  <Heart size={24} />
                </Link>
              </>
            )}
          </div>

          {/* Auth Buttons / Profile */}
          <div className="hidden md:flex items-center gap-3">
            {isLoggedIn ? (
              <div className="relative group cursor-pointer flex items-center gap-2 border border-outline-variant px-4 py-2 rounded-full">
                <User size={18} />
                <span className="text-sm font-medium">Profile</span>

                {/* Simple Dropdown Menu */}
                <div className="absolute right-0 top-10 w-40 bg-white dark:bg-[#1A1A1A] rounded-lg shadow-lg py-2 hidden group-hover:block border border-[#D4AF37]/20">
                  <Link
                    href="/profile"
                    className="block px-4 py-2 text-sm text-[#1B1D0E] dark:text-[#FBFBE2] hover:bg-amber-50 dark:hover:bg-neutral-800"
                  >
                    My Account
                  </Link>
                  <button
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full text-left flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-amber-50 dark:hover:bg-neutral-800"
                  >
                    <LogOut size={14} /> Log out
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link
                  href="/login"
                  className="px-6 py-2 rounded-full border border-[#735C00]/30 dark:border-[#D4AF37]/30 text-sm font-label uppercase tracking-widest hover:bg-amber-50 dark:hover:bg-neutral-800 transition-colors"
                >
                  Login
                </Link>
                <Link
                  href="/register"
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-[#735C00] to-[#D4AF37] text-white text-sm font-label uppercase tracking-widest scale-102 transition-all duration-200 ease-out hover:brightness-110"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            className="md:hidden flex items-center justify-center p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#FBFBE2] dark:bg-[#1A1A1A] border-t border-[#D4AF37]/20 py-4 px-6 shadow-xl flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg ${
                isActive(link.href)
                  ? "text-[#735C00] dark:text-[#D4AF37] font-bold"
                  : "text-[#1B1D0E] dark:text-[#FBFBE2] opacity-80"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <hr className="border-[#D4AF37]/20" />
          {!isLoggedIn && (
            <div className="flex flex-col gap-3">
              <Link
                href="/login"
                className="w-full text-center px-6 py-2 rounded-full border border-[#735C00]/30 dark:border-[#D4AF37]/30 text-sm font-label uppercase tracking-widest"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="w-full text-center px-6 py-2 rounded-full bg-gradient-to-r from-[#735C00] to-[#D4AF37] text-white text-sm font-label uppercase tracking-widest"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
