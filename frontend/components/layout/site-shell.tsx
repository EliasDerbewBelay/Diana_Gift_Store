import { ReactNode } from 'react';
import { SiteHeader } from '@/components/layout/site-header';
import { SiteFooter } from '@/components/layout/site-footer';
import { BottomNavigation } from '@/components/shared/bottom-navigation';

interface SiteShellProps {
  children: ReactNode;
}

export function SiteShell({ children }: SiteShellProps) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
      <SiteHeader />
      <main className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-7xl flex-1 flex-col px-4 py-6 sm:px-6 lg:px-8">
        {children}
      </main>
      <SiteFooter />
      <BottomNavigation />
    </div>
  );
}
