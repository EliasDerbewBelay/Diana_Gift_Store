'use client';

import Link from 'next/link';
import { Home, Heart, ShoppingBag, User } from 'lucide-react';
import { useAuthStore } from '@/store/useAuthStore';

export function BottomNavigation() {
  const user = useAuthStore((state) => state.user);

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/cart', label: 'Cart', icon: ShoppingBag },
    { href: '/favorites', label: 'Favorites', icon: Heart },
    { href: user ? '/checkout' : '/login', label: user ? 'Checkout' : 'Profile', icon: User },
  ];

  return (
    <nav className="sticky bottom-0 z-40 border-t border-slate-200 bg-white/95 px-4 py-3 backdrop-blur dark:border-slate-800 dark:bg-slate-950/95 md:hidden">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center gap-1 text-[11px] text-slate-600 transition hover:text-brand-600 dark:text-slate-300"
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
