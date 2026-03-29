'use client';

import Link from 'next/link';
import { Sparkles, User, LogOut, ShoppingBag } from 'lucide-react';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { useAuthStore } from '@/store/useAuthStore';
import { useCartStore } from '@/store/useCartStore';

export function SiteHeader() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);
  const cartCount = useCartStore((state) => state.totalItems());

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 text-lg font-semibold tracking-tight text-slate-950 dark:text-white"
        >
          <Sparkles className="h-6 w-6 text-brand-500" />
          Diana Gift Store
        </Link>

        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
          >
            Products
          </Link>
          <Link
            href="/favorites"
            className="text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
          >
            Favorites
          </Link>
          <Link
            href="/cart"
            className="flex items-center gap-2 text-sm font-medium text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
          >
            Cart
            {cartCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-500 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            href="/cart"
            className="relative p-2 text-slate-600 transition hover:text-brand-600 dark:text-slate-300 md:hidden"
          >
            <ShoppingBag className="h-6 w-6" />
            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 w-4 items-center justify-center rounded-full bg-brand-500 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>
          {user ? (
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-200">
                {user.name}
              </span>
              <button
                onClick={logout}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
              >
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-900 transition hover:border-brand-300 hover:text-brand-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            >
              <User className="h-4 w-4" />
              Sign in
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
