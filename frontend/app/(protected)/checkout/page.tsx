'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useAuthStore } from '@/store/useAuthStore';
import { useCartStore } from '@/store/useCartStore';
import { submitOrder } from '@/services/orderService';
import { formatCurrency, formatPhone } from '@/utils/format';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const checkoutSchema = z.object({
  fullName: z.string().min(2, 'Enter your name'),
  phone: z.string().min(10, 'Enter a valid phone number'),
  address: z.string().min(10, 'Enter your shipping address'),
  notes: z.string().optional(),
});

type CheckoutFormValues = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);
  const totalAmount = useCartStore((state) => state.totalAmount());
  const { register, handleSubmit, formState } = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      fullName: user?.name ?? '',
      phone: user?.phone ?? '',
    },
  });

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [router, user]);

  async function onSubmit(values: CheckoutFormValues) {
    if (items.length === 0) {
      toast.error('Your cart is empty. Add items before checkout.');
      return;
    }

    const order = await submitOrder({
      id: `checkout_${Date.now()}`,
      items,
      shipping: values,
      total: totalAmount,
      createdAt: new Date().toISOString(),
      status: 'pending',
    });

    clearCart();
    toast.success('Your order is on the way! We’ll message you on Telegram.');
    router.push('/order-success');
    console.log('Order submitted', order);
  }

  return (
    <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
      <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Checkout</p>
          <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">
            Complete your order
          </h1>
          <p className="max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-400">
            Add your shipping details and confirm the order. We’ll send a Telegram message for
            updates.
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Full name
            </label>
            <Input placeholder="Amina Rose" {...register('fullName')} />
            {formState.errors.fullName && (
              <p className="text-sm text-red-500">{formState.errors.fullName.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Phone
            </label>
            <Input type="tel" placeholder="(555) 123-4567" {...register('phone')} />
            {formState.errors.phone && (
              <p className="text-sm text-red-500">{formState.errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Address
            </label>
            <Textarea placeholder="123 Artisan Lane, Portland, OR" {...register('address')} />
            {formState.errors.address && (
              <p className="text-sm text-red-500">{formState.errors.address.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Order notes
            </label>
            <Textarea
              placeholder="Add gift wrap instructions or delivery notes"
              {...register('notes')}
            />
          </div>

          <Button type="submit" className="w-full">
            Submit order
          </Button>
        </form>
      </div>

      <aside className="space-y-6 rounded-[2.5rem] border border-slate-200 bg-slate-50 p-8 shadow-soft dark:border-slate-800 dark:bg-slate-900">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-slate-950 dark:text-white">Order summary</h2>
          <p className="text-sm leading-6 text-slate-600 dark:text-slate-400">
            Review the items in your cart before submitting the order.
          </p>
        </div>

        <div className="space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="rounded-3xl bg-white p-4 dark:bg-slate-950">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-slate-950 dark:text-white">
                    {item.product.name}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Qty {item.quantity}</p>
                </div>
                <p className="text-sm font-semibold text-slate-950 dark:text-white">
                  {formatCurrency(item.product.price * item.quantity)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-3xl bg-white p-5 dark:bg-slate-950">
          <div className="flex items-center justify-between text-sm text-slate-600 dark:text-slate-400">
            <span>Subtotal</span>
            <span className="font-semibold text-slate-950 dark:text-white">
              {formatCurrency(totalAmount)}
            </span>
          </div>
          <div className="mt-4 rounded-3xl bg-brand-500/10 p-4 text-sm text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
            Telegram order updates will be sent to{' '}
            <span className="font-semibold">{formatPhone(user?.phone ?? '+1 (555) 000-0000')}</span>
            .
          </div>
        </div>
      </aside>
    </section>
  );
}
