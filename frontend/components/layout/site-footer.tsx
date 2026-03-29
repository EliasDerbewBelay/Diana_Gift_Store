import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50/80 px-4 py-8 text-slate-600 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80 dark:text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">
            Diana Gift Store
          </p>
          <p className="mt-1 max-w-xl text-sm">
            Artisan gifts built with thoughtful design, simple checkout, and a warm handmade
            aesthetic.
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm">
          <Link
            href="https://t.me/diana_handmade_shop"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-brand-500 px-4 py-2 text-white transition hover:bg-brand-600"
          >
            Message on Telegram
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-slate-200 px-4 py-2 text-slate-900 transition hover:border-brand-300 dark:border-slate-700 dark:text-slate-100"
          >
            Sign in to account
          </Link>
        </div>
      </div>
    </footer>
  );
}
