import { getProducts } from "@/services/productService";
import { ProductCard } from "@/components/product/product-card";

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <section className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">Gift gallery</p>
          <h1 className="mt-3 text-3xl font-semibold text-slate-950 dark:text-white">Browse handmade collections.</h1>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            Each product is styled for a soft modern gift experience. Add favorites, waitlist, or cart items directly from the grid.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
