"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, Heart, Bell, Menu, X, LogOut, User, ChevronDown } from "lucide-react";
import { authClient } from "@/lib/auth-client";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const profileRef = useRef<HTMLDivElement>(null);

  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [isMobileMenuOpen]);

  useEffect(() => { setIsMobileMenuOpen(false); }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(e.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = async () => {
    await authClient.signOut();
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    router.push("/");
    router.refresh();
  };

  const getInitials = (name?: string | null, email?: string | null) => {
    if (name) {
      return name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);
    }
    if (email) return email[0].toUpperCase();
    return "U";
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/gift", label: "Browse Gifts" },
    { href: "/aboutMe", label: "About Me" },
    { href: "/contactMe", label: "Contact Me" },
  ];

  const isLinkActive = (href: string) =>
    href === "/" ? pathname === href : pathname.startsWith(href);

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
              <Link
                href="/cart"
                className="text-[#735C00] hover:scale-110 transition-all relative group"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={22} />
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#1B1D0E] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
              <Link
                href="/wishlist"
                className="text-[#735C00] hover:scale-110 transition-all"
                aria-label="Wishlist"
              >
                <Heart size={22} />
              </Link>
              <Link
                href="/notifications"
                className="text-[#735C00] hover:scale-110 transition-all"
                aria-label="Notifications"
              >
                <Bell size={22} />
              </Link>
            </div>

            {/* Auth Section */}
            {isPending ? (
              /* Loading skeleton */
              <div className="w-9 h-9 rounded-full bg-[#735C00]/20 animate-pulse" />
            ) : user ? (
              /* Authenticated: Avatar + Dropdown */
              <div className="relative" ref={profileRef}>
                <button
                  id="profile-menu-button"
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 group focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={isProfileOpen}
                >
                  {/* Avatar circle */}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#735C00] flex items-center justify-center text-white text-sm font-bold shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-200 ring-2 ring-transparent group-hover:ring-[#D4AF37]/40">
                    {user.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={user.image}
                        alt={user.name || "User"}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      getInitials(user.name, user.email)
                    )}
                  </div>
                  <ChevronDown
                    size={14}
                    className={`text-[#735C00] transition-transform duration-200 ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute right-0 mt-3 w-56 rounded-2xl bg-[#FBFBE2] border border-[#d0c5af]/40 shadow-[0_8px_32px_-4px_rgba(27,29,14,0.15)] overflow-hidden transition-all duration-200 origin-top-right ${
                    isProfileOpen
                      ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                  }`}
                  role="menu"
                >
                  {/* User info */}
                  <div className="px-4 py-3 border-b border-[#d0c5af]/30">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#735C00] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                        {user.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={user.image}
                            alt={user.name || "User"}
                            className="w-full h-full rounded-full object-cover"
                          />
                        ) : (
                          getInitials(user.name, user.email)
                        )}
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-[#1B1D0E] truncate">
                          {user.name || "User"}
                        </p>
                        <p className="text-xs text-[#735C00]/70 truncate">{user.email}</p>
                      </div>
                    </div>
                  </div>

                  {/* Menu items */}
                  <div className="py-1.5">
                    <Link
                      href="/profile"
                      onClick={() => setIsProfileOpen(false)}
                      className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#1B1D0E] hover:bg-[#735C00]/8 hover:text-[#735C00] transition-colors"
                      role="menuitem"
                    >
                      <User size={16} className="text-[#735C00]" />
                      My Profile
                    </Link>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
                      role="menuitem"
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              /* Guest: Login + Register */
              <>
                <Link
                  href="/auth/login"
                  className="px-5 lg:px-6 py-2 rounded-xl text-[#735C00] font-medium hover:bg-[#735C00]/10 transition-all"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  className="px-5 lg:px-6 py-2 rounded-xl bg-[#735C00] text-white font-medium hover:scale-105 transition-all shadow-lg hover:shadow-xl"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Toggle */}
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
          {/* Mobile Nav Links */}
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
              <Link
                href="/cart"
                className="text-[#735C00] hover:scale-110 transition-all relative"
                aria-label="Cart"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart size={24} />
                <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-[#1B1D0E] text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
              <Link
                href="/wishlist"
                className="text-[#735C00] hover:scale-110 transition-all"
                aria-label="Wishlist"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Heart size={24} />
              </Link>
              <Link
                href="/notifications"
                className="text-[#735C00] hover:scale-110 transition-all"
                aria-label="Notifications"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Bell size={24} />
              </Link>
            </div>

            {/* Mobile Auth Section */}
            {isPending ? (
              <div className="w-full h-12 rounded-xl bg-[#735C00]/20 animate-pulse" />
            ) : user ? (
              /* Mobile: Authenticated user panel */
              <div className="flex flex-col gap-3">
                {/* User info card */}
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-[#735C00]/8 border border-[#d0c5af]/30">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#735C00] flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-md">
                    {user.image ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={user.image}
                        alt={user.name || "User"}
                        className="w-full h-full rounded-full object-cover"
                      />
                    ) : (
                      getInitials(user.name, user.email)
                    )}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[#1B1D0E] truncate">
                      {user.name || "User"}
                    </p>
                    <p className="text-xs text-[#735C00]/70 truncate">{user.email}</p>
                  </div>
                </div>
                <Link
                  href="/profile"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-[#735C00] font-medium border border-[#735C00] hover:bg-[#735C00]/10 transition-all text-center"
                >
                  <User size={18} />
                  My Profile
                </Link>
                <button
                  onClick={handleSignOut}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-red-50 text-red-600 font-medium border border-red-200 hover:bg-red-100 transition-all"
                >
                  <LogOut size={18} />
                  Sign Out
                </button>
              </div>
            ) : (
              /* Mobile: Guest buttons */
              <div className="flex flex-col gap-4">
                <Link
                  href="/auth/login"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-3 rounded-xl text-[#735C00] font-medium border border-[#735C00] hover:bg-[#735C00]/10 transition-all text-center"
                >
                  Login
                </Link>
                <Link
                  href="/auth/register"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full px-6 py-3 rounded-xl bg-[#735C00] text-white font-medium hover:scale-105 transition-all shadow-lg text-center"
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Fixed header spacer */}
      <div className="h-[72px]" />
    </>
  );
};

export default Header;