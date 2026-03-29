import { notFound } from "next/navigation";
import { getProductById } from "@/services/productService";
import { ProductGallery } from "@/components/product/product-gallery";
import { ProductActions } from "@/components/product/product-actions";
import { formatCurrency } from "@/utils/format";

interface ProductPageProps {
  params: { id: string };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = await getProductById(id);

  if (!product) {
    notFound();
  }

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-brand-600">{product.category}</p>
        <h1 className="text-4xl font-semibold text-slate-950 dark:text-white">{product.name}</h1>
        <p className="max-w-3xl text-base leading-8 text-slate-600 dark:text-slate-400">{product.description}</p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <ProductGallery product={product} />

        <div className="space-y-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Price</p>
              <p className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">{formatCurrency(product.price)}</p>
            </div>
            <span className="rounded-full bg-brand-100 px-3 py-1 text-sm font-semibold text-brand-700 dark:bg-brand-500/20 dark:text-brand-100">
              {product.inStock ? "In stock" : "Sold out"}
            </span>
          </div>

          <div className="grid gap-3">
            <div className="flex items-center gap-3 rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
              <p className="text-sm text-slate-700 dark:text-slate-300">Handcrafted collection from {product.artisan}</p>
            </div>
            <div className="flex items-center gap-3 rounded-3xl bg-slate-50 p-4 dark:bg-slate-900">
              <p className="text-sm text-slate-700 dark:text-slate-300">Timeless quality made for daily gifting and rituals.</p>
            </div>
          </div>

          <ProductActions product={product} />

          <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-900 dark:text-slate-100">Details</p>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
              {product.details.map((detail) => (
                <li key={detail} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-brand-500" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
