import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import { productService } from "@/services/product.service";
import ProductGallery from "@/components/sections/gift/ProductGallery";
import ProductActions from "@/components/sections/gift/ProductActions";

export default async function ProductDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const productId = params.id;
  const product = await productService.getProductById(productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-[#FBFBE2] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-headline text-[#1B1D0E] mb-4">
            Product Not Found
          </h1>
          <Link href="/gift" className="text-[#735C00] hover:underline">
            Back to Gifts
          </Link>
        </div>
      </div>
    );
  }

  // Fetch related products (e.g. same category)
  const relatedProducts = await productService.getProductsByCategory(product.category || "");

  return (
    <div className="bg-[#FBFBE2] text-[#1B1D0E] font-body min-h-screen">
      <main className="pt-24 pb-14 max-w-5xl mx-auto px-4 lg:px-6">
        {/* Breadcrumb */}
        <nav className="mb-10 flex items-center gap-2 text-sm font-label uppercase tracking-widest opacity-60">
          <Link href="/" className="hover:text-[#735C00] transition-colors">
            Home
          </Link>
          <ChevronRight size={12} />
          <Link href="/gift" className="hover:text-[#735C00] transition-colors">
            Curated Gifts
          </Link>
          <ChevronRight size={12} />
          <span className="text-[#735C00] font-bold">{product.name}</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ProductGallery 
            productId={product.id} 
            images={[product.image]} // For now using the single image, can be expanded
            productName={product.name} 
          />

          {/* Right: Content */}
          <div className="lg:col-span-7 flex flex-col pt-2">
            <span className="font-label uppercase tracking-[0.2em] text-[10px] text-[#735C00] mb-2">
              {product.category}
            </span>
            <h1 className="font-headline text-4xl lg:text-5xl text-[#1B1D0E] leading-tight mb-5">
              {product.name}
            </h1>

            <div className="space-y-4 text-[#4d4635] leading-relaxed mb-8 text-base font-light">
              <p>{product.description}</p>
              <p>Immerse yourself in unparalleled luxury. This unique item is a masterclass in curated luxury designed for those who appreciate true artisan craftsmanship.</p>
            </div>

            <ProductActions productId={product.id} price={product.price} />
          </div>
        </div>

        {/* Related Products Section */}
        <section className="mt-24">
          <div className="flex justify-between items-end mb-8">
            <div>
              <span className="font-label uppercase tracking-[0.2em] text-[10px] text-[#735C00]">
                Discover More
              </span>
              <h2 className="font-headline text-2xl mt-1.5">
                Recommended for You
              </h2>
            </div>
            <div className="flex gap-3">
              <button className="w-10 h-10 rounded-full flex items-center justify-center border border-[#d0c5af] hover:bg-[#735C00] hover:text-white transition-all">
                <ArrowLeft size={16} />
              </button>
              <button className="w-10 h-10 rounded-full flex items-center justify-center border border-[#d0c5af] hover:bg-[#735C00] hover:text-white transition-all">
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          <div className="flex gap-6 overflow-x-auto hide-scrollbar pb-6 snap-x -mx-4 px-4 lg:mx-0 lg:px-0">
            {relatedProducts.filter(p => p.id !== product.id).slice(0, 4).map((rp) => (
              <Link
                key={rp.id}
                href={`/gift/${rp.id}`}
                className="min-w-[240px] md:min-w-[280px] snap-start group cursor-pointer"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 bg-[#f5f5dc]">
                  <Image
                    src={rp.image}
                    alt={rp.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 will-change-transform transform-gpu"
                  />
                </div>
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h3 className="font-headline text-lg text-[#1B1D0E] leading-tight">
                      {rp.name}
                    </h3>
                    <p className="text-[10px] font-label uppercase tracking-widest opacity-50 mt-1">
                      {rp.category}
                    </p>
                  </div>
                  <span className="font-headline text-[#735C00] whitespace-nowrap">
                    ${rp.price.toFixed(2)}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <style dangerouslySetInnerHTML={{ __html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}} />
    </div>
  );
}
