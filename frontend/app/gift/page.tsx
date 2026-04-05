"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {  
  Search, 
  SlidersHorizontal, 
  LayoutGrid, 
  List,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Heart
} from "lucide-react";
import GiftCard from "@/components/ui/GiftCard";
import { categories, products } from "@/constants";

const GiftsPage = () => {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState(1000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");



  const handleAddToCart = (productId: number) => {
    console.log(`Added product ${productId} to cart`);
    // Implement your cart logic here
  };

  const handleViewDetails = (productId: number) => {
    router.push(`/gift/${productId}`);
  };

  const handleAddToWishlist = (productId: number) => {
    console.log(`Added product ${productId} to wishlist`);
    // Implement your wishlist logic here
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesPrice = product.price <= priceRange;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesPrice && matchesSearch;
  });

  return (
    <div className="bg-[#FBFBE2] font-body text-[#1B1D0E] min-h-screen">
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-8">
        {/* Editorial Header & Search Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
            <div className="max-w-2xl">
              <span className="font-label uppercase tracking-[0.2em] text-xs text-[#735C00] font-bold mb-4 block">
                Collection 2024
              </span>
              <h1 className="font-headline text-5xl md:text-6xl text-[#1B1D0E] tracking-tight mb-6">
                Curated Wonders for <span className="italic">Memorable Moments</span>
              </h1>
              <p className="text-[#4d4635] text-lg leading-relaxed max-w-xl">
                Every gift tells a story. Discover our exclusive range of handpicked treasures, designed to bring a touch of elegance to your most cherished celebrations.
              </p>
            </div>
            
            <div className="w-full md:w-96">
              <div className="relative group">
                <input 
                  className="w-full bg-[#f5f5dc] border-b-2 border-[#d0c5af] focus:border-[#735C00] focus:ring-0 py-4 pl-12 pr-4 transition-all outline-none text-[#1B1D0E] placeholder:text-[#4d4635]/50"
                  placeholder="Search for the perfect gift..."
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-2 top-1/2 -translate-y-1/2 text-[#735C00] opacity-60 group-focus-within:opacity-100 transition-opacity" size={20} />
              </div>
            </div>
          </div>

          {/* Toolbar: Filter, Sort, View Toggle */}
          <div className="flex flex-wrap items-center justify-between gap-4 py-6 border-y border-[#d0c5af]/20">
            <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 px-4 py-2 hover:bg-[#eaead1] rounded-lg transition-colors font-medium">
                <SlidersHorizontal size={20} />
                <span>Filters</span>
              </button>
              <div className="h-6 w-px bg-[#d0c5af]/30"></div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg ${viewMode === "grid" ? "bg-[#d4af37] text-[#554300]" : "hover:bg-[#eaead1] transition-colors"}`}
                  aria-label="Grid view"
                >
                  <LayoutGrid size={20} />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg ${viewMode === "list" ? "bg-[#d4af37] text-[#554300]" : "hover:bg-[#eaead1] transition-colors"}`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#4d4635] uppercase tracking-widest">Sort by:</span>
              <select className="bg-transparent border-none focus:ring-0 font-medium text-[#1B1D0E] cursor-pointer py-1">
                <option>Recommended</option>
                <option>Newest Arrivals</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </section>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Filters */}
          <aside className="w-full lg:w-64 space-y-10">
            <div>
              <h3 className="font-headline text-lg mb-6 flex items-center justify-between">
                Categories
                <ChevronDown size={16} className="opacity-40" />
              </h3>
              <ul className="space-y-4">
                <li>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio"
                      name="category"
                      checked={selectedCategory === "All"}
                      onChange={() => setSelectedCategory("All")}
                      className="rounded border-[#d0c5af] text-[#735C00] focus:ring-[#735C00] w-5 h-5"
                    />
                    <span className="text-[#4d4635] group-hover:text-[#1B1D0E] transition-colors">
                      All Categories
                    </span>
                  </label>
                </li>
                {categories.map((category) => (
                  <li key={category.id}>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input 
                        type="radio"
                        name="category"
                        checked={selectedCategory === category.name}
                        onChange={() => setSelectedCategory(category.name)}
                        className="rounded border-[#d0c5af] text-[#735C00] focus:ring-[#735C00] w-5 h-5"
                      />
                      <span className="text-[#4d4635] group-hover:text-[#1B1D0E] transition-colors">
                        {category.name}
                      </span>
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-headline text-lg mb-6">Price Range</h3>
              <div className="px-2">
                <input 
                  type="range"
                  min="0"
                  max="2000"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                  className="w-full h-1 bg-[#e4e4cc] rounded-lg appearance-none cursor-pointer accent-[#735C00]"
                />
                <div className="flex justify-between mt-4 text-sm font-label text-[#4d4635]">
                  <span>$0</span>
                  <span className="font-bold text-[#735C00]">Up to ${priceRange}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-headline text-lg mb-6">Availability</h3>
              <div className="space-y-4">
                <label className="relative flex items-center cursor-pointer">
                  <input 
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-[#e4e4cc] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#735C00]"></div>
                  <span className="ml-3 text-[#4d4635]">In Stock Only</span>
                </label>
              </div>
            </div>

            <div className="pt-6">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZ_cuO7nCfT6hF0orrSQX50KaVncfG5Y69-Mhr19-4ea3Fni32TNBq-e_UMKMa_-K-pV2rUGSk9cngiS_YgoNipgf_wgQgvTJ-bOrNP12oOTXmcxpmqZQimL5eNTKACsoRAEnjIi3xOC1WcgBmHJwhwxED6ECjd4Gm55ZnC-jCKHzrgYMEugxDvl3PyU6LVqvSO37pMHXPPXTdh0dDMbfilRqINIGDTsA-HZBZyjxIldYNedoSlNs2r87nOW0Mf_LYB1ti60MN-kU"
                alt="Premium silk ribbon being tied around a gold textured gift box"
                width={300}
                height={300}
                className="w-full h-auto rounded-lg shadow-sm"
              />
              <div className="mt-4 p-4 bg-[#d4af37]/10 rounded-lg">
                <p className="text-xs font-label uppercase tracking-wider text-[#735C00] font-bold mb-1">Gift Concierge</p>
                <p className="text-sm italic text-[#4d4635]">Need help choosing? Our stylists are here to assist.</p>
              </div>
            </div>
          </aside>

          {/* ── Product area: display + pagination ── */}
          <div className="flex-1">

            {/* Product display */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#4d4635] text-lg">No products found matching your criteria.</p>
              </div>
            ) : viewMode === "grid" ? (
              /* Grid View */
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-16">
                {filteredProducts.map((product) => (
                  <GiftCard
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    price={product.price}
                    image={product.image}
                    onAddToCart={handleAddToCart}
                    onViewDetails={handleViewDetails}
                    onAddToWishlist={handleAddToWishlist}
                  />
                ))}
              </div>
            ) : (
              /* List View */
              <div className="flex flex-col gap-4">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="group flex gap-5 bg-white/60 border border-[#d0c5af]/20 rounded-2xl overflow-hidden hover:shadow-lg hover:border-[#d4af37]/40 transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="relative w-36 sm:w-48 flex-shrink-0 overflow-hidden bg-[#f5f5dc]">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between py-4 pr-5 flex-1 min-w-0">
                      <div>
                        {product.category && (
                          <span className="inline-block font-label text-[9px] uppercase tracking-[0.2em] text-[#735C00] bg-[#d4af37]/10 px-2 py-0.5 rounded-full mb-2">
                            {product.category}
                          </span>
                        )}
                        <h3 className="font-headline text-lg text-[#1B1D0E] leading-tight mb-1 truncate">
                          {product.name}
                        </h3>
                        <p className="text-[#4d4635] text-sm font-light leading-relaxed line-clamp-2">
                          {product.description}
                        </p>
                      </div>

                      {/* Price + Actions */}
                      <div className="flex items-center justify-between mt-4 gap-3 flex-wrap">
                        <span className="font-headline text-xl text-[#735C00] font-bold">
                          ${product.price.toFixed(2)}
                        </span>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleAddToWishlist(product.id)}
                            className="p-2 rounded-xl border border-[#d0c5af]/40 text-[#735C00] hover:bg-[#f5f5dc] transition-colors"
                            aria-label="Add to wishlist"
                          >
                            <Heart size={16} />
                          </button>
                          <button
                            onClick={() => handleAddToCart(product.id)}
                            className="px-4 py-2 text-xs font-label uppercase tracking-widest rounded-xl bg-[#735C00] text-white hover:brightness-110 transition-all"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => handleViewDetails(product.id)}
                            className="px-4 py-2 text-xs font-label uppercase tracking-widest rounded-xl border border-[#735C00] text-[#735C00] hover:bg-[#735C00]/10 transition-all"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Pagination */}
            {filteredProducts.length > 0 && (
              <div className="mt-20 flex justify-center items-center gap-2">
                <button className="p-3 rounded-full hover:bg-[#eaead1] transition-colors">
                  <ChevronLeft size={20} />
                </button>
                <button className="w-12 h-12 rounded-full bg-[#735C00] text-white font-bold">1</button>
                <button className="w-12 h-12 rounded-full hover:bg-[#eaead1] transition-colors">2</button>
                <button className="w-12 h-12 rounded-full hover:bg-[#eaead1] transition-colors">3</button>
                <span className="px-2 opacity-40">...</span>
                <button className="w-12 h-12 rounded-full hover:bg-[#eaead1] transition-colors">12</button>
                <button className="p-3 rounded-full hover:bg-[#eaead1] transition-colors">
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GiftsPage;