import React from "react";
import ProductTable from "@/components/admin/ProductTable";
import { productService } from "@/services/product.service";

export default async function AdminProductsPage() {
  const products = await productService.getProducts();

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="font-headline text-3xl mb-1">Products Catalog</h1>
          <p className="text-[#4d4635] text-sm opacity-60">Manage your store inventory and visual content.</p>
        </div>
        <div className="flex gap-4">
          {/* External links or actions */}
        </div>
      </div>

      <ProductTable initialProducts={products.map(p => ({
        ...p,
        category: p.category ?? "Uncategorized",
      }))} />
    </div>
  );
}
