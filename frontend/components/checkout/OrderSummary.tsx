"use client";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  onPlaceOrder: (e: React.FormEvent) => void;
}

export default function OrderSummary({
  subtotal,
  shipping,
  tax,
  total,
  onPlaceOrder,
}: OrderSummaryProps) {
  return (
    <div className="bg-[#eaead1] p-8 rounded-xl space-y-8">
      <h2 className="font-['Noto_Serif'] text-2xl text-[#1b1d0e]">
        Order Summary
      </h2>
      <div className="space-y-4">
        <div className="flex justify-between items-center text-[#4d4635]">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center text-[#4d4635]">
          <span>Shipping</span>
          <span className="text-[#735c00] font-medium">
            {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
          </span>
        </div>
        <div className="flex justify-between items-center text-[#4d4635]">
          <span>Estimated Tax</span>
          <span>${tax.toFixed(2)}</span>
        </div>
        <div className="pt-4 border-t border-[#d0c5af]/30 flex justify-between items-center">
          <span className="font-['Noto_Serif'] text-xl text-[#1b1d0e]">
            Total
          </span>
          <span className="font-['Noto_Serif'] text-2xl text-[#735c00]">
            ${total.toFixed(2)}
          </span>
        </div>
      </div>

      <button
        onClick={onPlaceOrder}
        className="w-full bg-[#735c00] text-[#ffffff] py-4 rounded-xl font-bold text-center text-lg hover:scale-[1.02] transition-transform shadow-lg active:scale-95"
      >
        Place Order
      </button>

      <div className="flex items-center gap-3 justify-center text-[#4d4635] text-sm">
        <span className="material-symbols-outlined text-sm">shield</span>
        <span>Secure SSL Encrypted Checkout</span>
      </div>

      <div className="pt-6">
        <p className="text-xs text-[#4d4635] leading-relaxed text-center">
          By placing this order, you agree to our Terms of Service and Privacy
          Policy. All gifts are curated with premium standards.
        </p>
      </div>
    </div>
  );
}
