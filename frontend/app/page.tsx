import Image from 'next/image';
import Link from 'next/link';
import { getFeaturedProducts } from '@/services/productService';
import { ProductCard } from '@/components/product/product-card';
import { formatCurrency } from '@/utils/format';

export default async function HomePage() {
  const featured = await getFeaturedProducts();
  const heroProduct = featured[0];

  return (
    <div className="space-y-12">
      <section className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="inline-flex rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-100">
              Handmade gifts with modern charm
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Curated artisan goods for cozy, thoughtful gifting.
            </h1>
            <p className="max-w-xl text-base leading-8 text-slate-600 dark:text-slate-400">
              Browse softly crafted apparel, homeware, and stationery designed for a meaningful
              everyday ritual.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
              >
                Shop gifts
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              >
                Checkout now
              </Link>
            </div>
          </div>

          <div className="grid gap-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-white shadow-soft dark:bg-slate-950">
              <Image
                src={heroProduct.images[0]}
                alt={heroProduct.name}
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.25em] text-brand-600">
                Featured artisan pick
              </p>
              <h2 className="text-2xl font-semibold text-slate-950 dark:text-white">
                {heroProduct.name}
              </h2>
              <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
                {heroProduct.description}
              </p>
              <p className="text-lg font-semibold text-brand-700">
                {formatCurrency(heroProduct.price)}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">
              New arrivals
            </p>
            <h2 className="text-3xl font-semibold text-slate-950 dark:text-white">
              Bright gift ideas for every room.
            </h2>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-brand-300 dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          >
            Explore all products
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
