import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function OrderSuccessPage() {
  return (
    <section className="flex flex-col items-center justify-center space-y-8 rounded-[2.5rem] border border-slate-200 bg-white p-12 text-center shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-100 dark:bg-brand-500/20">
        <CheckCircle className="h-10 w-10 text-brand-600 dark:text-brand-400" />
      </div>

      <div className="max-w-xl space-y-4">
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">
          Order received with warmth!
        </h1>
        <p className="text-base leading-8 text-slate-600 dark:text-slate-400">
          We’ve received your order and are preparing it with care. You’ll receive updates on
          Telegram as we slow-craft your artisan pieces.
        </p>
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Link
          href="/products"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-500 px-8 py-4 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Browse more gifts
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-slate-900 transition hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
