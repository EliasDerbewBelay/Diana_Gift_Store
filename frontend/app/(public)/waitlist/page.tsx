"use client";

import Link from "next/link";
import { Clock } from "lucide-react";
import { useWaitlistStore } from "@/store/useWaitlistStore";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/product/product-card";

export default function WaitlistPage() {
  const waitlist = useWaitlistStore((state) => state.waitlist);
  const waitlistProducts = products.filter((product) => waitlist.includes(product.id));

  if (waitlistProducts.length === 0) {
    return (
      <section className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <div className="text-center">
          <Clock className="mx-auto h-12 w-12 text-brand-500" />
          <h1 className="mt-6 text-3xl font-semibold text-slate-950 dark:text-white">No waitlist items</h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Add products to your waitlist and return to them when you are ready.
          </p>
          <Link href="/products" className="mt-8 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600">
            Discover gifts
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Waitlist</p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">Items you want to revisit.</h1>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {waitlistProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
