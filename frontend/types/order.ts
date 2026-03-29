import { CartItem } from '@/types/cart';

export interface ShippingAddress {
  fullName: string;
  phone: string;
  address: string;
  notes?: string;
}

export interface Order {
  id: string;
  items: CartItem[];
  shipping: ShippingAddress;
  total: number;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed';
}
