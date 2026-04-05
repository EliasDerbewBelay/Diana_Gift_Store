export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
  featured?: boolean;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  discount?: number;
}
