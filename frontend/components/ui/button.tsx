import { ButtonHTMLAttributes, forwardRef } from 'react';
import clsx from 'clsx';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-brand-300 disabled:pointer-events-none disabled:opacity-60',

          variant === 'primary' && 'bg-brand-500 text-white hover:bg-brand-600',

          variant === 'secondary' &&
            'bg-white text-slate-900 border border-slate-200 hover:bg-slate-50 dark:bg-slate-900 dark:text-white dark:border-slate-700',

          variant === 'ghost' &&
            'bg-transparent text-slate-700 hover:text-brand-600 dark:text-slate-200',

          variant === 'outline' &&
            'border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100',

          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = 'Button';
