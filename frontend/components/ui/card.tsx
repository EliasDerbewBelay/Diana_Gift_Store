import { ReactNode } from 'react';
import { clsx } from 'clsx';

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-[2rem] border border-slate-200 bg-white p-6 shadow-soft transition dark:border-slate-800 dark:bg-slate-950',
        className,
      )}
    >
      {children}
    </div>
  );
}
