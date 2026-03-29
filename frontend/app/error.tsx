'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Error({ error }: { error: Error }) {
  const router = useRouter();

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="grid min-h-[70vh] place-items-center px-4 py-20 text-slate-900 dark:text-slate-100">
      <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <h1 className="text-3xl font-semibold">Something went wrong</h1>
        <p className="mt-4 text-slate-600 dark:text-slate-400">
          We could not load that page. Try again or return home.
        </p>
        <button
          type="button"
          onClick={() => router.refresh()}
          className="mt-6 inline-flex items-center rounded-full bg-brand-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Refresh page
        </button>
      </div>
    </main>
  );
}
