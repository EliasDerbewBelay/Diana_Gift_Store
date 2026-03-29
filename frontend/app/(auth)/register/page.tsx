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

const registerSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Enter a valid email'),
  phone: z.string().min(10, 'Add a phone number'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

type RegisterFormValues = z.infer<typeof registerSchema>;

export default function RegisterPage() {
  const router = useRouter();
  const registerUser = useAuthStore((state) => state.register);
  const { register, handleSubmit, formState } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  function onSubmit(values: RegisterFormValues) {
    registerUser({
      id: Date.now().toString(),
      name: values.name,
      email: values.email,
      phone: values.phone,
    });
    toast.success('Account created successfully');
    router.push('/checkout');
  }

  return (
    <section className="mx-auto max-w-xl rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-soft dark:border-slate-800 dark:bg-slate-950">
      <div className="space-y-4">
        <p className="text-sm uppercase tracking-[0.25em] text-brand-600">Register</p>
        <h1 className="text-3xl font-semibold text-slate-950 dark:text-white">
          Create your checkout profile.
        </h1>
        <p className="text-sm leading-7 text-slate-600 dark:text-slate-400">
          Register and save your contact details for faster checkout and order updates.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-5">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            Full name
          </label>
          <Input placeholder="Maya Woods" {...register('name')} />
          {formState.errors.name && (
            <p className="text-sm text-red-500">{formState.errors.name.message}</p>
          )}
        </div>

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
            Phone
          </label>
          <Input type="tel" placeholder="(555) 123-4567" {...register('phone')} />
          {formState.errors.phone && (
            <p className="text-sm text-red-500">{formState.errors.phone.message}</p>
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
          Create account
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
        Already registered?{' '}
        <Link href="/login" className="font-semibold text-brand-600 hover:text-brand-700">
          Sign in
        </Link>
      </p>
    </section>
  );
}
