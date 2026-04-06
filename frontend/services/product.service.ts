import { prisma } from "@/lib/prisma";
import { Product } from "@/types";

export const productService = {
  async getProducts() {
    return await prisma.product.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  async getFeaturedProducts() {
    return await prisma.product.findMany({
      where: { featured: true },
      orderBy: { createdAt: "desc" },
    });
  },

  async getProductById(id: string) {
    return await prisma.product.findUnique({
      where: { id },
    });
  },

  async createProduct(data: Omit<Product, "id">) {
    return await prisma.product.create({
      data,
    });
  },

  async updateProduct(id: string, data: Partial<Product>) {
    return await prisma.product.update({
      where: { id },
      data,
    });
  },

  async deleteProduct(id: string) {
    return await prisma.product.delete({
      where: { id },
    });
  },

  async getProductsByCategory(category: string) {
    return await prisma.product.findMany({
      where: { category },
    });
  }
};
