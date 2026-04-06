import React from "react";
import { orderService } from "@/services/order.service";

export default async function AdminOrdersPage() {
  const orders = await orderService.getOrders();

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="font-headline text-3xl mb-1">Order Management</h1>
        <p className="text-[#4d4635] text-sm opacity-60">Track shipments and update order statuses.</p>
      </div>

      <div className="bg-white rounded-3xl border border-[#d4af37]/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#FBFBE2]/30 text-[10px] font-label uppercase tracking-[0.2em] text-[#4d4635] opacity-60">
                <th className="px-8 py-4 font-bold">Order ID</th>
                <th className="px-8 py-4 font-bold">Customer</th>
                <th className="px-8 py-4 font-bold">Products</th>
                <th className="px-8 py-4 font-bold">Total</th>
                <th className="px-8 py-4 font-bold">Status</th>
                <th className="px-8 py-4 font-bold">Date</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-[#d4af37]/10">
              {orders.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-20 text-center text-[#4d4635] opacity-50 italic">No orders found.</td>
                </tr>
              ) : (
                orders.map((order) => (
                  <tr key={order.id} className="hover:bg-[#FBFBE2]/20 transition-colors">
                    <td className="px-8 py-5 font-mono text-[#735C00]">#{order.id.slice(-6).toUpperCase()}</td>
                    <td className="px-8 py-5">
                      <div className="font-bold text-[#1B1D0E]">{order.user.name}</div>
                      <div className="text-[10px] opacity-60">{order.user.email}</div>
                    </td>
                    <td className="px-8 py-5">
                      <div className="text-xs">
                        {order.items.length} {order.items.length === 1 ? "item" : "items"}
                        <div className="text-[10px] opacity-40 truncate max-w-[150px]">
                          {order.items.map(i => i.product.name).join(", ")}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-5 font-headline font-bold text-[#1B1D0E]">
                      ${order.totalPrice.toFixed(2)}
                    </td>
                    <td className="px-8 py-5">
                      <select 
                        defaultValue={order.status}
                        className="bg-[#FBFBE2] border border-[#d4af37]/20 rounded-lg py-1 px-2 text-[10px] font-bold uppercase tracking-widest text-[#735C00] outline-none"
                        // In a real app, this would trigger a Server Action or API call
                      >
                        <option value="PENDING">Pending</option>
                        <option value="PROCESSING">Processing</option>
                        <option value="SHIPPED">Shipped</option>
                        <option value="DELIVERED">Delivered</option>
                        <option value="CANCELLED">Cancelled</option>
                      </select>
                    </td>
                    <td className="px-8 py-5 opacity-60">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
