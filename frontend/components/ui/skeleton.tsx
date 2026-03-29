import { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

export function Skeleton({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx(
        'animate-pulse rounded-3xl bg-slate-200/80 shadow-soft dark:bg-slate-800/80',
        className,
      )}
      {...props}
    />
  );
}
