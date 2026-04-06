import { prisma } from "@/lib/prisma";

export const analyticsService = {
  async getDashboardStats() {
    const [userCount, orderCount, productCount, revenue] = await Promise.all([
      prisma.user.count(),
      prisma.order.count(),
      prisma.product.count(),
      prisma.order.aggregate({
        _sum: { totalPrice: true },
      }),
    ]);

    return {
      totalUsers: userCount,
      totalOrders: orderCount,
      totalProducts: productCount,
      totalRevenue: revenue._sum.totalPrice || 0,
    };
  },

  async getRecentActivity() {
    const [recentOrders, recentUsers] = await Promise.all([
      prisma.order.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
        include: { user: { select: { name: true } } },
      }),
      prisma.user.findMany({
        take: 5,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    return {
      recentOrders,
      recentUsers,
    };
  },
};
