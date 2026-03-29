'use client';

import Link from 'next/link';
import { ShoppingBag, Trash2 } from 'lucide-react';
import { useCartStore } from '@/store/useCartStore';
import { formatCurrency } from '@/utils/format';
import { Button } from '@/components/ui/button';

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount());
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const clearCart = useCartStore((state) => state.clearCart);

  if (items.length === 0) {
    return (
      <section className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-brand-500" />
          <h1 className="mt-6 text-3xl font-semibold text-slate-950 dark:text-white">
            Your cart is empty
          </h1>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Add a few handmade pieces to your cart while you browse the collection.
          </p>
          <Link
            href="/products"
            className="mt-8 inline-flex rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Continue shopping
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="space-y-8">
      <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Cart</p>
            <h1 className="mt-2 text-3xl font-semibold text-slate-950 dark:text-white">
              Your order summary
            </h1>
          </div>
          <button
            type="button"
            onClick={clearCart}
            className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-brand-300 dark:border-slate-700 dark:text-slate-100"
          >
            Clear cart
          </button>
        </div>

        <div className="mt-8 space-y-4">
          {items.map((item) => (
            <div
              key={item.product.id}
              className="grid gap-4 rounded-[1.75rem] border border-slate-200 p-5 dark:border-slate-800"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold text-slate-950 dark:text-white">
                    {item.product.name}
                  </p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                    {formatCurrency(item.product.price)}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                    className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-brand-300 dark:border-slate-700 dark:text-slate-200"
                  >
                    -
                  </button>
                  <span className="min-w-[2rem] text-center text-sm font-semibold">
                    {item.quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                    className="rounded-full border border-slate-200 p-2 text-slate-700 transition hover:border-brand-300 dark:border-slate-700 dark:text-slate-200"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4 text-sm text-slate-600 dark:text-slate-300">
                <span>{formatCurrency(item.product.price * item.quantity)}</span>
                <button
                  type="button"
                  onClick={() => removeItem(item.product.id)}
                  className="inline-flex items-center gap-2 text-red-500 transition hover:text-red-600"
                >
                  <Trash2 className="h-4 w-4" /> Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-4 rounded-[2rem] bg-slate-50 p-6 dark:bg-slate-900">
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-300">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-900 dark:text-white">
              {formatCurrency(totalAmount)}
            </span>
          </div>
          <Link
            href="/checkout"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-600"
          >
            Proceed to checkout
          </Link>
        </div>
      </div>
    </section>
  );
}
