"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { 
  ShoppingCart, 
  Heart, 
  Bell, 
  Search, 
  SlidersHorizontal, 
  LayoutGrid, 
  List,
  ChevronDown,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import GiftCard from "@/components/ui/GiftCard";

const GiftsPage = () => {
  const router = useRouter();
  const [priceRange, setPriceRange] = useState(1000);
  const [inStockOnly, setInStockOnly] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("Fine Jewelry");

  const categories = [
    { id: 1, name: "Luxury Watches" },
    { id: 2, name: "Fine Jewelry" },
    { id: 3, name: "Home Decor" },
    { id: 4, name: "Artisan Leather" },
    { id: 5, name: "Bespoke Fragrance" },
  ];

  const products = [
    {
      id: 1,
      name: "Aurelian Ceramic Vase",
      description: "Hand-painted with 24k gold leaf accents, this timeless piece elevates any interior.",
      price: 425.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCqgb05pMP9Hf3wQidC2w5AUrAdfTHnFTNk6qcB3RPXRm_8NJTPlrJ3rWZGhFhTzZkRZaa4VrptRO6NyhXu7upMCaUV2QnH38b0QNzWnbIU5ReudLXQWQIplbHypTzEG-B71x4mq3b-_5etCDnIgn6skIK7uBlKFOilL-nWnBYeaVE-yyNGZR-nDzF0K7sNW0jARgysvmH2-PoOj0lkoejNvbCPXYXbtTVudvg3qLrenVSGBgK2aiFzBsWyZwUadLOGJvT5ZGbunnA",
      category: "Home Decor"
    },
    {
      id: 2,
      name: "Precision Chronograph",
      description: "Swiss-made excellence meeting modern minimalist design for the discerning professional.",
      price: 1280.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZav9Ml92J5SqVJerZQpXk1rItJj6I-GXRC9aDQcc9m6ld4fMugLbnushDbj02f6xoGW9cI9k3NTnvLChIErhOQfX3PJVhMXOCbH71C0TaRA5GrK0m1GIZf7x9EKAidzfAqHSUz0i-uryT15TIIbyRGn1UTxTW_gLM1khv5PTEsaEvsIW6k8ttSq7EOvqbT5Jg9ItJE8zPSCB3kJOdCMDQ2B0PHWrtQ8YSe03IUAmqC8dRgwB78SoXzWxTEKGjyvOadV5cZ7e-2zU",
      category: "Luxury Watches"
    },
    {
      id: 3,
      name: "Heritage Leather Duffel",
      description: "Full-grain vegetable-tanned leather that develops a unique patina over time.",
      price: 550.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCRk837ekNO2CloBuPoerAxr6yGYfmZOAtea7rekzmWcluT5uR6hvSezWXnQr62BvHxcc32ZlYJ8f2uxYzkmHWWfJBXj7C9Dq8sGjDA8Uf6K7PQ2n3DQSvBaKJ0_wkfMqdACKlH8PDm2xN0sN4hXvxkjx0ufrRN90Gf0zd34-KLLq26kfC_js558HoHK4etI_-cgh6Pd-C-IfMwGye5NMl5UqQ3qwoZiLeYnMun2hALPQCeRSBNCo--tt2IyJzO5T9cC0JFUEANy3E",
      category: "Artisan Leather"
    },
    {
      id: 4,
      name: "Nocturne Eau de Parfum",
      description: "A seductive blend of midnight jasmine, sandalwood, and rare oud.",
      price: 185.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDJyK31bguSjrNpwqDcUmz1xT766xc7s6alQBBm1LavwxhKxVPMTNKhXOYH_rjf4LkS8ypabJfmIstYJOO8QhGixit6911nhaRPLzqb_0BgrHxDPR0OKAyUO-UqdsLN3iLwMWJRCeL6406NNJEJdFg28ys-e72kQu6I0I80f_2xAX3mn5r1D-nv-XRmEWoILdMXOI_JPfb0DYF4lE5u7PqXt45csjETKXlH0moWoqJFHffewjwx6rpIx7ykTqjxeaH0AW5UI1KHkHI",
      category: "Bespoke Fragrance"
    },
    {
      id: 5,
      name: "Luminaire Task Lamp",
      description: "Sleek industrial design meets warm atmospheric lighting for the home office.",
      price: 310.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq6wnBVLfQSuJ9vFngxjUpSg70AEY-kckElDVn2IiWOP046DtIE9NHX1CNjK5M6EHUVYTP_53GobVXe2Or8kxIVchRM3FIRKGfKen_K8JO1ZLufJwKBQABz6YBWrF5oh7HAOrsjQPN2sZCfDWrN7FANe2aFu-Sh11JfBE_wkaU5_i7IsROluzieU2SnT0_D_I3GHdxggqHElkifrW2dQiQAW9ylvhJdWw2lqKVwUdQZWasJHvMLu7Ue-X_Dg2BOxw8NkosXUbjqBk",
      category: "Home Decor"
    },
    {
      id: 6,
      name: "Velvet Loungers",
      description: "Embroidered silk velvet slippers handcrafted for ultimate comfort and style.",
      price: 265.00,
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwrxOb4_4Qn4cjG7sVHk-KZK2HlJ8f-elFtsVEDMLJLrJAqOc8J6u-BZogNiXhjlbLBYfBkfCyF9SQfq4FRrQos7sbYSSZBpp0LSdBISXdCAxNScx0g4DyV-hE95HLTf-RB13MZNcCW8x2dZtRvH_OKGnSLdhJ62Ar8T1idNAvTvbjKu4SaJ0cyTyb8hBb4Q8cK0Pi7JxYFi9L2lFyRCmXyzqCzZHlWpe6YYPcQbW7ucEop6mgwDM7zM8f2rVuOamLFgo_ZWYvOBY",
      category: "Artisan Leather"
    }
  ];

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

          {/* Gift Grid */}
          <div className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-20">
                <p className="text-[#4d4635] text-lg">No products found matching your criteria.</p>
              </div>
            ) : (
              <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"} gap-x-8 gap-y-16`}>
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