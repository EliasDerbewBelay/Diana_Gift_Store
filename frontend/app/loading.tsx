export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-20 text-slate-600 dark:text-slate-300">
      <div className="flex flex-col items-center gap-3 rounded-3xl border border-slate-200 bg-white/90 p-8 shadow-soft backdrop-blur dark:border-slate-800 dark:bg-slate-900/80">
        <div className="h-14 w-14 animate-pulse rounded-full bg-brand-100 dark:bg-brand-500" />
        <p className="max-w-sm text-center text-lg font-medium">
          Preparing your handmade shopping experience...
        </p>
      </div>
    </div>
  );
}
