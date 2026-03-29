import { products } from '@/lib/data/products';
import { Product } from '@/types/product';

export async function getProducts(): Promise<Product[]> {
  return products;
}

export async function getProductById(id: string): Promise<Product | null> {
  return products.find((product) => product.id === id) ?? null;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.slice(0, 5);
}
