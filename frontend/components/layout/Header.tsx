"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Heart, Bell, Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gift", label: "Browse Gifts" },
    { href: "/favorites", label: "Favorites" },
    { href: "/about", label: "About Me" },
    { href: "/contact", label: "Contact Me" },
  ];

  // Function to check if link is active
  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FBFBE2]/95 backdrop-blur-xl shadow-[0_4px_20px_-4px_rgba(27,29,14,0.1)]"
            : "bg-[#FBFBE2]/70 backdrop-blur-xl shadow-[0_64px_64px_-12px_rgba(27,29,14,0.06)]"
        }`}
      >
        <nav className="flex justify-between items-center w-full px-4 sm:px-6 lg:px-8 py-4 max-w-7xl mx-auto font-['Noto_Serif'] tracking-tight">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-serif italic text-[#735C00] hover:opacity-80 transition-opacity z-50"
          >
            Diana Gift Store
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-all duration-300 hover:scale-105 ${
                    isActive
                      ? "text-[#735C00] border-b-2 border-[#D4AF37] pb-1 font-bold"
                      : "text-[#1B1D0E] opacity-80 hover:text-[#735C00]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4 lg:gap-5">
            <div className="hidden lg:flex items-center gap-3 lg:gap-4 border-r border-[#d0c5af]/30 pr-4 lg:pr-6 mr-1">
              <button className="text-[#735C00] hover:scale-110 transition-all relative group">
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#1B1D0E] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button className="text-[#735C00] hover:scale-110 transition-all">
                <Heart size={22} />
              </button>
              <button className="text-[#735C00] hover:scale-110 transition-all">
                <Bell size={22} />
              </button>
            </div>
            <button className="px-5 lg:px-6 py-2 rounded-xl text-[#735C00] font-medium hover:bg-[#735C00]/10 transition-all">
              Login
            </button>
            <button className="px-5 lg:px-6 py-2 rounded-xl bg-[#735C00] text-white font-medium hover:scale-105 transition-all shadow-lg hover:shadow-xl">
              Register
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-[#735C00] z-50 p-2 hover:bg-[#735C00]/10 rounded-lg transition-all"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#FBFBE2] z-40 transition-transform duration-300 md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "72px" }}
      >
        <div className="flex flex-col h-full overflow-y-auto">
          {/* Mobile Navigation Links */}
          <div className="flex flex-col items-center gap-6 py-12 px-6">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl transition-all duration-300 ${
                    isActive
                      ? "text-[#735C00] border-b-2 border-[#D4AF37] font-bold"
                      : "text-[#1B1D0E] opacity-80 hover:text-[#735C00]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile Action Buttons */}
          <div className="border-t border-[#d0c5af]/20 pt-8 px-6">
            <div className="flex justify-center gap-8 mb-8">
              <button className="text-[#735C00] hover:scale-110 transition-all relative">
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#1B1D0E] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </button>
              <button className="text-[#735C00] hover:scale-110 transition-all">
                <Heart size={24} />
              </button>
              <button className="text-[#735C00] hover:scale-110 transition-all">
                <Bell size={24} />
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <button className="w-full px-6 py-3 rounded-xl text-[#735C00] font-medium border border-[#735C00] hover:bg-[#735C00]/10 transition-all">
                Login
              </button>
              <button className="w-full px-6 py-3 rounded-xl bg-[#735C00] text-white font-medium hover:scale-105 transition-all shadow-lg">
                Register
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed header */}
      <div className="h-[72px]" />
    </>
  );
};

export default Header;