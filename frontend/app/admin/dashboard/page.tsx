import React from "react";
import { 
  Users, 
  ShoppingBag, 
  DollarSign, 
  Package, 
  ArrowUpRight, 
  ArrowDownRight,
  TrendingUp
} from "lucide-react";
import { analyticsService } from "@/services/analytics.service";

export default async function AdminDashboard() {
  const stats = await analyticsService.getDashboardStats();
  const activity = await analyticsService.getRecentActivity();

  const cards = [
    { title: "Total Users", value: stats.totalUsers, icon: Users, change: "+12.5%", positive: true },
    { title: "Total Orders", value: stats.totalOrders, icon: ShoppingBag, change: "+3.2%", positive: true },
    { title: "Revenue", value: `$${stats.totalRevenue.toFixed(2)}`, icon: DollarSign, change: "+18.9%", positive: true },
    { title: "Products", value: stats.totalProducts, icon: Package, change: "-1.4%", positive: false },
  ];

  return (
    <div className="space-y-10 animate-fade-in">
      <div>
        <h1 className="font-headline text-3xl mb-2">Dashboard Overview</h1>
        <p className="text-[#4d4635] text-sm opacity-60">Real-time performance at your fingertips.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-[#d4af37]/10 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-[#735C00]/5 rounded-xl text-[#735C00]">
                <card.icon size={24} />
              </div>
              <div className={`flex items-center gap-1 text-xs font-bold ${card.positive ? "text-green-600" : "text-red-500"}`}>
                {card.change}
                {card.positive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
              </div>
            </div>
            <div>
              <p className="text-xs font-label uppercase tracking-widest text-[#4d4635] opacity-60 mb-1">{card.title}</p>
              <h3 className="font-headline text-2xl text-[#1B1D0E]">{card.value}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Charts & Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Recent Orders List */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-[#d4af37]/10 p-8 shadow-sm">
          <div className="flex justify-between items-center mb-10">
            <h3 className="font-headline text-xl">Recent Orders</h3>
            <button className="text-xs font-bold text-[#735C00] uppercase tracking-widest hover:underline">View All</button>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-[#d4af37]/10 pb-4">
                  <th className="pb-4 font-label uppercase tracking-widest opacity-50 px-2 font-bold text-[10px]">Order ID</th>
                  <th className="pb-4 font-label uppercase tracking-widest opacity-50 px-2 font-bold text-[10px]">Customer</th>
                  <th className="pb-4 font-label uppercase tracking-widest opacity-50 px-2 font-bold text-[10px]">Status</th>
                  <th className="pb-4 font-label uppercase tracking-widest opacity-50 px-2 font-bold text-[10px]">Total</th>
                  <th className="pb-4 font-label uppercase tracking-widest opacity-50 px-2 font-bold text-[10px]">Date</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#d4af37]/5">
                {activity.recentOrders.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="py-20 text-center text-[#4d4635] opacity-50 italic font-body">No orders found yet.</td>
                  </tr>
                ) : (
                  activity.recentOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-[#FBFBE2]/30 transition-colors">
                      <td className="py-5 px-2 font-mono text-[#735C00]">#{order.id.slice(-6).toUpperCase()}</td>
                      <td className="py-5 px-2 text-[#1B1D0E] font-medium">{order.user.name}</td>
                      <td className="py-5 px-2">
                        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                          order.status === "DELIVERED" ? "bg-green-100 text-green-700" :
                          order.status === "PENDING" ? "bg-yellow-100 text-yellow-700" :
                          "bg-blue-100 text-blue-700"
                        }`}>
                          {order.status}
                        </span>
                      </td>
                      <td className="py-5 px-2 font-headline font-bold text-[#1B1D0E]">${order.totalPrice.toFixed(2)}</td>
                      <td className="py-5 px-2 opacity-60">{new Date(order.createdAt).toLocaleDateString()}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Small Widget / Recent Users */}
        <div className="lg:col-span-4 space-y-8">
          <div className="bg-[#735C00] text-white p-8 rounded-3xl shadow-xl relative overflow-hidden group">
            <div className="relative z-10 flex flex-col items-center text-center">
              <TrendingUp size={48} className="mb-4 opacity-40 group-hover:scale-110 transition-transform duration-500" />
              <h3 className="font-headline text-lg mb-2">Growth Performance</h3>
              <p className="text-xs opacity-70 font-label uppercase tracking-widest mb-6">Last 30 Days Portfolio</p>
              <span className="text-4xl font-headline font-bold">+24%</span>
            </div>
            {/* Design circle */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-1000"></div>
          </div>

          <div className="bg-white rounded-3xl border border-[#d4af37]/10 p-8 shadow-sm">
            <h3 className="font-headline text-lg mb-6">New Customers</h3>
            <div className="space-y-6">
              {activity.recentUsers.length === 0 ? (
                <p className="text-center italic opacity-40 text-xs py-10">No users found.</p>
              ) : (
                activity.recentUsers.map((user) => (
                  <div key={user.id} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#d4af37]/10 text-[#735C00] flex items-center justify-center font-bold text-xs uppercase">
                      {user.name.slice(0, 2)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#1B1D0E] leading-tight">{user.name}</h4>
                      <p className="text-[10px] opacity-60 truncate max-w-[120px]">{user.email}</p>
                    </div>
                  </div>
                ))
              )}
            </div>
            <button className="w-full mt-8 py-3 text-xs font-bold text-[#735C00] font-label uppercase tracking-widest border border-[#735C00]/20 rounded-xl hover:bg-[#735C00]/5 transition-all">
              Manage Users
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
