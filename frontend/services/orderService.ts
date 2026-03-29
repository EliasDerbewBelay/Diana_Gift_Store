import { Order } from '@/types/order';

export async function submitOrder(order: Order): Promise<Order> {
  await new Promise((resolve) => setTimeout(resolve, 550));

  return {
    ...order,
    id: `order_${Date.now()}`,
    status: 'confirmed',
    createdAt: new Date().toISOString(),
  };
}
