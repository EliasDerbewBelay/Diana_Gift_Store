"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, CheckCircle2, Circle } from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const hasMinLength = formData.password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(formData.password);
  const passwordsMatch =
    formData.confirmPassword.length > 0 &&
    formData.password === formData.confirmPassword;

  const strength = [hasMinLength, hasSpecialChar, passwordsMatch].filter(
    Boolean
  ).length;

  const strengthLabel = ["", "Weak", "Fair", "Strong"][strength];
  const strengthColor = ["", "#e57373", "#d4af37", "#81c784"][strength];

  const isFormValid =
    formData.fullName &&
    formData.email &&
    hasMinLength &&
    hasSpecialChar &&
    passwordsMatch &&
    formData.terms;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      console.log("Registration data:", formData);
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden flex bg-[#FBFBE2] font-body text-[#1B1D0E]">

      {/* ── Left Panel (desktop only) ── */}
      <aside className="hidden lg:flex lg:w-5/12 xl:w-1/2 relative flex-shrink-0 flex-col justify-end overflow-hidden bg-[#1b1d0e]">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCob58O9ut6VSQQOF7uyQ6p3JNIjrZP2DsypCC9iiNNjGpCJp9LR8_77YbmjMzrUNfIzjoOOs7OUKIWLCfS6oiYSa-YuHGiPh0LOFwxEyjMLazkX6Ryu7ofZlyZAVKF8GjXcI7EMTlQX6XYjF6nNkIxdXyuRWNiCBsLZtgdrJxrJ3leXc5wlL3Y4gyQlLLUpgBwFRp5Ezhqr162LF5Iv02L-1iP1gZnltNIoOe_AGkpuAYbrmjnR-duip6-d1ID2tIl3k05NPCGWcY"
          alt="Luxury gift arrangement"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b1d0e] via-[#1b1d0e]/30 to-transparent" />

        <div className="relative z-10 p-12 xl:p-16 space-y-4">
          <span className="font-label uppercase tracking-[0.3em] text-[#d4af37] text-[10px]">
            Established Heritage
          </span>
          <h1 className="font-headline italic text-4xl xl:text-5xl text-[#FBFBE2] leading-tight max-w-xs">
            Start your gifting journey
          </h1>
          <p className="text-[#e4e4cc]/70 text-sm leading-relaxed max-w-xs">
            Curating timeless elegance and artisanal craftsmanship for those
            who value the art of giving.
          </p>
          <div className="pt-2 h-px w-16 bg-[#d4af37]/40" />
        </div>

        {/* Brand tag */}
        <div className="absolute top-10 left-12 z-20">
          <span className="font-headline font-light tracking-[0.25em] text-[#FBFBE2] text-lg">
            THE ATELIER
          </span>
        </div>
      </aside>

      {/* ── Right Panel (form) ── */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden bg-gradient-to-br from-white to-[#f5f5dc]">

        {/* Mobile brand bar */}
        <div className="lg:hidden flex items-center justify-center pt-6 pb-2 flex-shrink-0">
          <span className="font-headline font-light tracking-[0.25em] text-[#1B1D0E] text-base">
            THE ATELIER
          </span>
        </div>

        {/* Form container — fills remaining height */}
        <div className="flex-1 flex items-center justify-center px-6 sm:px-10 overflow-hidden">
          <div className="w-full max-w-sm">

            {/* Header */}
            <div className="mb-5">
              <h2 className="font-headline text-3xl sm:text-4xl text-[#1B1D0E] leading-tight">
                Create Account
              </h2>
              <p className="text-[#4d4635]/60 text-xs font-label uppercase tracking-widest mt-1">
                Join the Diana Gift Store family
              </p>
              <div className="mt-3 h-px w-10 bg-[#d4af37]" />
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-3.5">

              {/* Full Name */}
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-[#4d4635] mb-1">
                  Full Name
                </label>
                <input
                  name="fullName"
                  type="text"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Julianne Moore"
                  required
                  className="w-full bg-transparent border-b border-[#d0c5af] focus:border-[#735C00] py-2 text-sm text-[#1B1D0E] placeholder:text-[#d0c5af]/60 outline-none transition-colors"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-[#4d4635] mb-1">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="atelier@dianagifts.com"
                  required
                  className="w-full bg-transparent border-b border-[#d0c5af] focus:border-[#735C00] py-2 text-sm text-[#1B1D0E] placeholder:text-[#d0c5af]/60 outline-none transition-colors"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-[#4d4635] mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="w-full bg-transparent border-b border-[#d0c5af] focus:border-[#735C00] py-2 pr-8 text-sm text-[#1B1D0E] placeholder:text-[#d0c5af]/60 outline-none transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-[#4d4635]/50 hover:text-[#735C00] transition-colors"
                  >
                    {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {/* Inline strength + rules */}
                {formData.password && (
                  <div className="mt-1.5 flex items-center gap-3">
                    <div className="flex gap-1 flex-1">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="h-0.5 flex-1 rounded-full transition-all duration-300"
                          style={{
                            backgroundColor:
                              strength >= i ? strengthColor : "#e4e4cc",
                          }}
                        />
                      ))}
                    </div>
                    <span
                      className="text-[9px] font-label uppercase tracking-widest"
                      style={{ color: strengthColor }}
                    >
                      {strengthLabel}
                    </span>
                  </div>
                )}
                <div className="mt-1.5 flex gap-4">
                  <span
                    className={`flex items-center gap-1 text-[9px] font-label uppercase tracking-tight ${hasMinLength ? "text-[#735C00]" : "text-[#d0c5af]"}`}
                  >
                    {hasMinLength ? <CheckCircle2 size={10} /> : <Circle size={10} />}
                    8+ chars
                  </span>
                  <span
                    className={`flex items-center gap-1 text-[9px] font-label uppercase tracking-tight ${hasSpecialChar ? "text-[#735C00]" : "text-[#d0c5af]"}`}
                  >
                    {hasSpecialChar ? <CheckCircle2 size={10} /> : <Circle size={10} />}
                    Symbol
                  </span>
                </div>
              </div>

              {/* Confirm Password */}
              <div>
                <label className="block text-[10px] font-label uppercase tracking-widest text-[#4d4635] mb-1">
                  Confirm Password
                </label>
                <div className="relative">
                  <input
                    name="confirmPassword"
                    type={showConfirm ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className={`w-full bg-transparent border-b py-2 pr-8 text-sm outline-none transition-colors placeholder:text-[#d0c5af]/60 ${
                      formData.confirmPassword && !passwordsMatch
                        ? "border-red-400 text-red-500"
                        : passwordsMatch
                        ? "border-[#735C00] text-[#1B1D0E]"
                        : "border-[#d0c5af] text-[#1B1D0E] focus:border-[#735C00]"
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirm(!showConfirm)}
                    className="absolute right-1 top-1/2 -translate-y-1/2 text-[#4d4635]/50 hover:text-[#735C00] transition-colors"
                  >
                    {showConfirm ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                </div>
                {formData.confirmPassword && !passwordsMatch && (
                  <p className="text-[9px] text-red-400 mt-1 font-label uppercase tracking-wide">
                    Passwords do not match
                  </p>
                )}
              </div>

              {/* Terms */}
              <label className="flex items-start gap-2.5 cursor-pointer pt-0.5">
                <input
                  name="terms"
                  type="checkbox"
                  checked={formData.terms}
                  onChange={handleChange}
                  required
                  className="mt-0.5 w-3.5 h-3.5 rounded border-[#d0c5af] text-[#735C00] focus:ring-[#735C00]/20 accent-[#735C00]"
                />
                <span className="text-[10px] font-label uppercase tracking-wide text-[#4d4635]/70 leading-relaxed">
                  I agree to the{" "}
                  <Link href="/terms" className="text-[#735C00] underline">
                    Terms
                  </Link>{" "}
                  &{" "}
                  <Link href="/privacy" className="text-[#735C00] underline">
                    Privacy Policy
                  </Link>
                </span>
              </label>

              {/* Submit */}
              <button
                type="submit"
                disabled={!isFormValid}
                className="w-full mt-1 py-3.5 bg-[#d4af37] text-[#554300] font-label text-xs uppercase tracking-[0.2em] rounded-xl shadow hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                Create Account
              </button>
            </form>

            {/* Nav to login */}
            <p className="mt-4 text-center text-[10px] font-label uppercase tracking-widest text-[#4d4635]/60">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-[#735C00] font-semibold hover:underline"
              >
                Sign In
              </Link>
            </p>
          </div>
        </div>

        {/* Footer copyright */}
        <div className="flex-shrink-0 pb-4 text-center">
          <p className="text-[9px] font-label uppercase tracking-widest text-[#4d4635]/30">
            © {new Date().getFullYear()} Diana Gift Store. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
