import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'soft' | 'solid';
}

export function Badge({ variant = 'soft', className, children, ...props }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.15em]',
        variant === 'soft' &&
          'bg-brand-100 text-brand-700 dark:bg-brand-500/15 dark:text-brand-200',
        variant === 'solid' && 'bg-brand-500 text-white',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
