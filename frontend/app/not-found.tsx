import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-[70vh] place-items-center px-4 py-20 text-slate-900 dark:text-slate-100">
      <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-10 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <h1 className="text-4xl font-semibold">Page not found</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          The gift you're looking for may have been sold already.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Return home
        </Link>
      </div>
    </main>
  );
}
