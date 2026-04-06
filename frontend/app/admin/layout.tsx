import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import Link from "next/link";
import { LayoutDashboard, Package, ShoppingBag, Users, Bell, LogOut, Moon, Sun } from "lucide-react";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session || session.user.role !== "ADMIN") {
    redirect("/auth/login?error=unauthorized");
  }

  return (
    <div className="flex min-h-screen bg-[#FBFBE2] text-[#1B1D0E]">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-[#d4af37]/20 flex flex-col">
        <div className="p-6">
          <Link href="/admin/dashboard" className="text-2xl font-serif italic text-[#735C00]">
            Diana Admin
          </Link>
        </div>
        
        <nav className="flex-1 px-4 space-y-2 mt-4 text-sm font-label uppercase tracking-widest">
          <Link 
            href="/admin/dashboard" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#735C00]/5 text-[#735C00] transition-all"
          >
            <LayoutDashboard size={18} />
            Dashboard
          </Link>
          <Link 
            href="/admin/products" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#735C00]/5 text-[#4d4635] transition-all"
          >
            <Package size={18} />
            Products
          </Link>
          <Link 
            href="/admin/orders" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#735C00]/5 text-[#4d4635] transition-all"
          >
            <ShoppingBag size={18} />
            Orders
          </Link>
          <Link 
            href="/admin/users" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-[#735C00]/5 text-[#4d4635] transition-all"
          >
            <Users size={18} />
            Users
          </Link>
        </nav>

        <div className="p-4 border-t border-[#d4af37]/10">
          <Link 
            href="/" 
            className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-red-50 text-red-600 transition-all font-label uppercase tracking-widest text-xs"
          >
            <LogOut size={16} />
            Exit Admin
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <header className="h-16 bg-white border-b border-[#d4af37]/10 flex items-center justify-between px-8">
          <h2 className="font-headline text-lg">Control Center</h2>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-[#FBFBE2] rounded-full transition-colors text-[#735C00]">
              <Bell size={20} />
            </button>
            <div className="w-8 h-8 rounded-full bg-[#735C00] text-white flex items-center justify-center font-bold text-xs">
              AD
            </div>
          </div>
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
