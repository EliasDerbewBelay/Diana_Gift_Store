'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'react-hot-toast';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: '1rem',
            background: 'rgba(255, 255, 255, 0.95)',
            color: '#111827',
          },
        }}
      />
    </ThemeProvider>
  );
}
