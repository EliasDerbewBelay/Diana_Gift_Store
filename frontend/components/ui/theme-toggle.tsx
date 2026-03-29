'use client';

import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const activeTheme = theme === 'system' ? resolvedTheme : theme;
  const nextTheme = activeTheme === 'dark' ? 'light' : 'dark';

  return (
    <Button type="button" variant="ghost" onClick={() => setTheme(nextTheme)} className="gap-2">
      {activeTheme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      {activeTheme === 'dark' ? 'Light' : 'Dark'}
    </Button>
  );
}
