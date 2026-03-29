import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Providers } from '@/components/layout/providers';
import { SiteShell } from '@/components/layout/site-shell';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Diana Gift Store',
  description:
    'Handmade gifts, boutique accessories, and checkout-ready shopping for artisan shoppers.',
  metadataBase: new URL('https://diana-gift-store.example'),
  openGraph: {
    title: 'Diana Gift Store',
    description:
      'Modern handmade e-commerce experience with curated gift collections and effortless checkout.',
    type: 'website',
  },
  twitter: {
    title: 'Diana Gift Store',
    description:
      'Modern handmade e-commerce experience with curated gift collections and effortless checkout.',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body suppressHydrationWarning className="min-h-full bg-slate-50 text-slate-950 transition-colors duration-200 dark:bg-slate-950 dark:text-white">
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  );
}
