export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: string;
  tags: string[];
  artisan: string;
  details: string[];
  inStock: boolean;
}
