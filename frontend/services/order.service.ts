import { prisma } from "@/lib/prisma";

export const orderService = {
  async getOrders() {
    return await prisma.order.findMany({
      include: {
        user: { select: { name: true, email: true } },
        items: { include: { product: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  },

  async getOrdersByUserId(userId: string) {
    return await prisma.order.findMany({
      where: { userId },
      include: {
        items: { include: { product: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  },

  async getOrderById(id: string) {
    return await prisma.order.findUnique({
      where: { id },
      include: {
        user: { select: { name: true, email: true } },
        items: { include: { product: true } },
      },
    });
  },

  async createOrder(userId: string, items: { productId: string; quantity: number; price: number }[]) {
    const totalPrice = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const order = await prisma.order.create({
      data: {
        userId,
        totalPrice,
        items: {
          create: items.map((item) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price,
          })),
        },
      },
    });

    // Create notification for the user
    await prisma.notification.create({
      data: {
        userId,
        message: `Your order #${order.id.slice(-6)} has been placed successfully!`,
        type: "ORDER_STATUS",
      },
    });

    return order;
  },

  async updateOrderStatus(id: string, status: string) {
    const order = await prisma.order.update({
      where: { id },
      data: { status },
    });

    // Create notification for the user
    await prisma.notification.create({
      data: {
        userId: order.userId,
        message: `Your order #${order.id.slice(-6)} status has been updated to ${status}.`,
        type: "ORDER_STATUS",
      },
    });

    return order;
  },
};
