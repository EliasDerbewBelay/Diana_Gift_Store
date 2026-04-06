"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Plus, 
  Search, 
  MoreVertical, 
  Edit, 
  Trash2, 
  Filter,
} from "lucide-react";
import { Product } from "@/types";
import { productService } from "@/services/product.service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ProductTableProps {
  initialProducts: any[];
}

const ProductTable = ({ initialProducts }: ProductTableProps) => {
  const router = useRouter();
  const [products, setProducts] = useState(initialProducts);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.category?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    
    try {
      await productService.deleteProduct(id);
      setProducts(prev => prev.filter(p => p.id !== id));
      toast.success("Product deleted successfully");
      router.refresh();
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-[#d4af37]/10 shadow-sm overflow-hidden animate-fade-in">
      <div className="p-8 border-b border-[#d4af37]/10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="font-headline text-2xl mb-1">Product Management</h1>
          <p className="text-[#4d4635] text-xs opacity-60 font-body uppercase tracking-widest">Total: {products.length} Items</p>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative">
            <input 
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-[#FBFBE2]/50 border border-[#d4af37]/20 rounded-xl py-2 pl-10 pr-4 text-sm focus:ring-1 focus:ring-[#735C00] outline-none w-64 transition-all"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#735C00] opacity-40" size={16} />
          </div>
          <button className="p-2.5 bg-[#FBFBE2] text-[#735C00] rounded-xl hover:bg-[#735C00]/10 transition-colors">
            <Filter size={18} />
          </button>
          <button className="flex items-center gap-2 bg-[#735C00] text-white px-5 py-2.5 rounded-xl font-label uppercase tracking-widest text-xs font-bold hover:scale-105 transition-all shadow-md">
            <Plus size={16} />
            Add Product
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-[#FBFBE2]/30 text-[10px] font-label uppercase tracking-[0.2em] text-[#4d4635] opacity-60">
              <th className="px-8 py-4 font-bold">Product</th>
              <th className="px-8 py-4 font-bold">Category</th>
              <th className="px-8 py-4 font-bold">Price</th>
              <th className="px-8 py-4 font-bold">Stock</th>
              <th className="px-8 py-4 font-bold text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-[#d4af37]/10">
            {filteredProducts.length === 0 ? (
              <tr>
                <td colSpan={5} className="py-20 text-center text-[#4d4635] opacity-50 italic">No products found.</td>
              </tr>
            ) : (
              filteredProducts.map((product) => (
                <tr key={product.id} className="hover:bg-[#FBFBE2]/20 transition-colors group">
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl overflow-hidden relative bg-[#FBFBE2]">
                        <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#1B1D0E] line-clamp-1">{product.name}</h4>
                        <p className="text-[10px] text-[#735C00] opacity-60 font-body uppercase tracking-wider line-clamp-1">ID: #{product.id.slice(-6).toUpperCase()}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-4">
                    <span className="px-3 py-1 bg-[#d4af37]/10 text-[#735C00] rounded-full text-[10px] font-bold uppercase tracking-widest leading-none">
                      {product.category || "Uncategorized"}
                    </span>
                  </td>
                  <td className="px-8 py-4 font-headline font-bold text-base text-[#1B1D0E]">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-8 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span className="text-xs">In Stock</span>
                    </div>
                  </td>
                  <td className="px-8 py-4 text-right">
                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-[#735C00]/10 text-[#735C00] rounded-lg transition-colors">
                        <Edit size={16} />
                      </button>
                      <button 
                        onClick={() => handleDelete(product.id)}
                        className="p-2 hover:bg-red-50 text-red-600 rounded-lg transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                      <button className="p-2 hover:bg-[#FBFBE2] text-[#4d4635] rounded-lg transition-colors">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      
      {/* Pagination Placeholder */}
      <div className="p-8 border-t border-[#d4af37]/10 flex items-center justify-between">
        <p className="text-xs text-[#4d4635]/60">Showing {filteredProducts.length} of {products.length} products</p>
        <div className="flex gap-2">
          <button disabled className="p-2 rounded-lg border border-[#d4af37]/10 opacity-40">
            <ChevronLeft size={16} />
          </button>
          <button disabled className="p-2 rounded-lg border border-[#d4af37]/10 opacity-40">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Internal icons for convenience
const ChevronLeft = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>;
const ChevronRight = ({ size }: { size: number }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>;

export default ProductTable;
