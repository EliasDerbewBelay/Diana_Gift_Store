"use client";

import { useState } from "react";
import CartItem from "@/components/checkout/CartItem";
import ShippingForm from "@/components/checkout/ShippingForm";
import OrderSummary from "@/components/checkout/OrderSummary";
import SuccessModal from "@/components/checkout/SuccessModal";

interface CartItemType {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
}

export default function CheckoutPage() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [cartItems, setCartItems] = useState<CartItemType[]>([
    {
      id: "1",
      name: "The Artisan Bloom Collection",
      description: "Bespoke floral arrangement in porcelain vase",
      price: 185.0,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBGgPkLJdztXTc5V6IpB1ci3PNn9wrpYVMXq4FKbiuFZKARioCW0uC-ZD9Q45uo-Cxo-xzk3MP6jiY2A8D2MZZjRFFda4HlFYFhxGBEO_61HENJyEovDJgnZlYVZ--TwuW2W0A8ZNqFFqrsoNm88T-SsWU3x9Yy3LRPv5Fu9k4shOV7BdB2tN-t1JggbihMdXyfTD5XnMcMXfVCtbuQSWBBGOenovddMiaJb3spoVsAYjKLt1n5pwFzgH4mLdRvTO2UiOWrEsID728",
    },
    {
      id: "2",
      name: "Ethereal Timepiece No. 4",
      description: "Hand-crafted minimalist watch with leather strap",
      price: 320.0,
      quantity: 1,
      image:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBn-KcQnddU6syu2oBlv2nYUPoWsMWBR-9THxHoQFuD8CcYqNGBWxq-eon4_Xzi7c8httC_38WByEFUggpwX3B5Ppt-7Du0hgs5ptgRTyH2zkVWwb3vaosOcL8wWo7g7JiOxiqL8BnubyL369wbBA17-PFUMtHlQzh1dQxBJWyy2_geezXhTXOAtrShF7JIoEte0ZuFkmKM9yvFLvqEXMZ4jITdnBvdbt9zC6Ok03lIbkm6ChPajl7f3nx7zZ3bd6DkBtU9IHmbPyw",
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item,
      ),
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const tax = subtotal * 0.084;
  const total = subtotal + tax;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  return (
    <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto bg-[#fbfbe2] text-[#1b1d0e] font-body">
      {/* Editorial Header */}
      <header className="mb-16">
        <h1 className="font-['Noto_Serif'] text-5xl md:text-6xl text-[#735c00] tracking-tight mb-4">
          Your Selection
        </h1>
        <p className="font-['Inter'] uppercase tracking-widest text-[#4d4635] text-sm">
          Review your curated gifts and complete your order
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Left Column: Cart & Form */}
        <div className="lg:col-span-8 space-y-16">
          {/* Cart Items Section */}
          <section className="space-y-8">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
              />
            ))}
          </section>

          {/* Checkout Form Section */}
          <ShippingForm onSubmit={handlePlaceOrder} />
        </div>

        {/* Right Column: Order Summary Sidebar */}
        <aside className="lg:col-span-4 sticky top-32">
          <OrderSummary
            subtotal={subtotal}
            shipping={0}
            tax={tax}
            total={total}
            onPlaceOrder={handlePlaceOrder}
          />
        </aside>
      </div>

      {/* Success Modal */}
      <SuccessModal
        isOpen={showSuccess}
        onClose={() => setShowSuccess(false)}
      />
    </main>
  );
}
