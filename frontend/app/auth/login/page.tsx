"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
    // Add your login logic here
  };

  return (
    <main className="flex min-h-screen bg-[#FBFBE2] font-body text-[#1B1D0E] selection:bg-[#d4af37] selection:text-[#554300]">
      {/* Left Side: Emotional Brand Identity */}
      <section className="relative hidden w-1/2 lg:flex flex-col justify-center items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            alt="Luxury gift moment"
            className="h-full w-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjTe7KIGhjJP1lHLd6cyWfA5VIxugrTQaI8Nndekf6H07L1NoJVI0vK6bOejG7h1GiQ1detxmB0OSMHjnr_-NO0BbtwLRcukMnLVrrXaVxQBnQxG2vSognMpm7opP0xJEmcdNxfa4D2evSN4VMZcuiuJRzRLsjAlMRLNbDc8O-EDASLVWXn7USBsiB8VgM5m0WBrCuABw8fKc7tMech8A3x5dnBva9xjdekv3qbYpwbac_dC8RsfddcytiV09aYL3XBubxTkjxpds"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A1A1A] via-[#1A1A1A]/60 to-transparent"></div>
        </div>

        <div className="relative z-10 px-16 text-left w-full">
          <div className="mb-8">
            <span className="text-[#d4af37] font-label uppercase tracking-[0.3em] text-xs">
              The Atelier Experience
            </span>
          </div>
          <h1 className="font-headline italic text-6xl xl:text-7xl text-[#FBFBE2] leading-tight tracking-tight max-w-xl">
            Make Every Gift Memorable
          </h1>
          <div className="mt-12 h-[1px] w-24 bg-[#d4af37]/50"></div>
        </div>

        {/* Brand Logo Anchor */}
        <div className="absolute top-12 left-12 z-20">
          <span className="text-2xl font-headline font-light tracking-[0.2em] text-[#FBFBE2]">
            THE ATELIER
          </span>
        </div>
      </section>

      {/* Right Side: Login Canvas */}
      <section className="w-full lg:w-1/2 flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#f5f5dc] px-6 sm:px-12 relative">
        <div className="w-full max-w-[440px]">
          {/* Form Header */}
          <header className="mb-10 text-center lg:text-left">
            <h2 className="font-headline text-4xl text-[#1B1D0E] mb-2">
              Welcome Back
            </h2>
            <p className="font-label text-[#4d4635]/70 tracking-wide uppercase text-[11px]">
              Login to continue
            </p>
          </header>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div className="group">
              <label
                htmlFor="email"
                className="block font-label text-[10px] uppercase tracking-widest text-[#4d4635] mb-2 ml-1"
              >
                Email Address
              </label>
              <div className="relative rounded-lg transition-all duration-300 focus-within:shadow-[0_0_0_4px_rgba(212,175,55,0.15)]">
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-[#d0c5af] focus:border-[#735C00] focus:ring-0 px-1 py-3 text-[#1B1D0E] placeholder:text-[#d0c5af]/50 transition-colors outline-none"
                  placeholder="atelier@example.com"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="group">
              <div className="flex justify-between items-end mb-2">
                <label
                  htmlFor="password"
                  className="block font-label text-[10px] uppercase tracking-widest text-[#4d4635] ml-1"
                >
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[10px] uppercase tracking-widest text-[#735C00] font-semibold hover:opacity-70 transition-opacity"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative rounded-lg transition-all duration-300 focus-within:shadow-[0_0_0_4px_rgba(212,175,55,0.15)]">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b-2 border-[#d0c5af] focus:border-[#735C00] focus:ring-0 px-1 py-3 pr-10 text-[#1B1D0E] placeholder:text-[#d0c5af]/50 transition-colors outline-none"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 top-1/2 -translate-y-1/2 text-[#4d4635]/60 hover:text-[#735C00] transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Stay Logged In */}
            <div className="flex items-center space-x-3 pt-2">
              <input
                id="remember"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-[#d0c5af] text-[#735C00] focus:ring-[#735C00]/20"
              />
              <label
                htmlFor="remember"
                className="text-xs text-[#4d4635] font-body"
              >
                Remember this device
              </label>
            </div>

            {/* CTA Actions */}
            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-[#d4af37] text-[#554300] font-label uppercase tracking-widest text-xs py-5 rounded-xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] shadow-sm"
              >
                Login
              </button>
            </div>
          </form>

          {/* Social Auth Splitter */}
          <div className="relative py-4 flex items-center">
            <div className="flex-grow border-t border-[#d0c5af]/30"></div>
            <span className="flex-shrink mx-4 text-[9px] uppercase tracking-[0.2em] text-[#4d4635]/50">
              Or authenticate via
            </span>
            <div className="flex-grow border-t border-[#d0c5af]/30"></div>
          </div>

          {/* Social Options */}
          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-3 border border-[#d0c5af]/30 rounded-xl hover:bg-[#eaead1] transition-colors">
              <span className="text-[10px] font-label uppercase tracking-widest text-[#1B1D0E]">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-3 py-3 border border-[#d0c5af]/30 rounded-xl hover:bg-[#eaead1] transition-colors">
              <span className="text-[10px] font-label uppercase tracking-widest text-[#1B1D0E]">
                Apple
              </span>
            </button>
          </div>

          {/* Footer Call to Action */}
          <footer className="mt-12 text-center">
            <p className="text-[#4d4635]/70 text-xs font-body">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="text-[#735C00] font-semibold underline underline-offset-4 decoration-[#735C00]/30 hover:decoration-[#735C00] transition-all"
              >
                Register
              </Link>
            </p>
          </footer>
        </div>

        {/* Responsive Mobile Logo */}
        <div className="absolute top-8 lg:hidden">
          <span className="text-xl font-headline font-light tracking-[0.2em] text-[#1B1D0E]">
            THE ATELIER
          </span>
        </div>
      </section>
    </main>
  );
};

export default LoginPage;
