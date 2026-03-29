'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import toast from 'react-hot-toast';
import { useAuthStore } from '@/store/useAuthStore';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const loginSchema = z.object({
  email: z.string().email('Enter a valid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const router = useRouter();
  const login = useAuthStore((state) => state.login);
  const { register, handleSubmit, formState } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
  });

  function onSubmit(values: LoginFormValues) {
    login({ id: Date.now().toString(), name: 'Guest shopper', email: values.email });
    toast.success('Signed in successfully');
    router.push('/checkout');
  }

  return (
    <section className="mx-auto max-w-xl rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Sign in</p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">
          Checkout when you are ready.
        </h1>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
          Create an account or sign in to complete the purchase and keep your order details saved.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Email
          </label>
          <Input type="email" placeholder="you@example.com" {...register('email')} />
          {formState.errors.email && (
            <p className="text-sm text-red-500">{formState.errors.email.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Password
          </label>
          <Input type="password" placeholder="••••••••" {...register('password')} />
          {formState.errors.password && (
            <p className="text-sm text-red-500">{formState.errors.password.message}</p>
          )}
        </div>

        <Button type="submit" className="w-full">
          Sign in
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
        New to Diana Gift Store?{' '}
        <Link href="/register" className="font-semibold text-brand-600 hover:text-brand-700">
          Create account
        </Link>
      </p>
    </section>
  );
}
