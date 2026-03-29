import Image from 'next/image';
import { Product } from '@/types/product';

interface ProductGalleryProps {
  product: Product;
}

export function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="grid gap-4 lg:grid-cols-[1fr_0.8fr]">
      <div className="rounded-[2rem] overflow-hidden border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={1200}
          height={900}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="grid gap-4">
        {product.images.slice(1).map((image) => (
          <div
            key={image}
            className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft dark:border-slate-800 dark:bg-slate-950"
          >
            <Image
              src={image}
              alt={product.name}
              width={800}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
