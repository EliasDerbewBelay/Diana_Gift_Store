import { prisma } from "@/lib/prisma";

export const notificationService = {
  async getNotifications(userId?: string) {
    if (userId) {
      return await prisma.notification.findMany({
        where: { userId },
        orderBy: { createdAt: "desc" },
      });
    }
    return await prisma.notification.findMany({
      orderBy: { createdAt: "desc" },
    });
  },

  async markAsRead(id: string) {
    return await prisma.notification.update({
      where: { id },
      data: { status: "READ" },
    });
  },

  async markAllAsRead(userId: string) {
    return await prisma.notification.updateMany({
      where: { userId, status: "UNREAD" },
      data: { status: "READ" },
    });
  },

  async deleteNotification(id: string) {
    return await prisma.notification.delete({
      where: { id },
    });
  },

  async getUnreadCount(userId: string) {
    return await prisma.notification.count({
      where: { userId, status: "UNREAD" },
    });
  }
};
