import React from "react";
import prisma from "@/lib/prisma";
import { Users, Mail, Shield, User as UserIcon } from "lucide-react";

export default async function AdminUsersPage() {
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="font-headline text-3xl mb-1">User Management</h1>
        <p className="text-[#4d4635] text-sm opacity-60">Manage permissions and view customer profiles.</p>
      </div>

      <div className="bg-white rounded-3xl border border-[#d4af37]/10 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#FBFBE2]/30 text-[10px] font-label uppercase tracking-[0.2em] text-[#4d4635] opacity-60">
                <th className="px-8 py-4 font-bold">User</th>
                <th className="px-8 py-4 font-bold">Email</th>
                <th className="px-8 py-4 font-bold">Role</th>
                <th className="px-8 py-4 font-bold">Joined</th>
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-[#d4af37]/10">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-[#FBFBE2]/20 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#735C00]/10 flex items-center justify-center text-[#735C00]">
                         <UserIcon size={20} />
                      </div>
                      <div className="font-bold text-[#1B1D0E]">{user.name}</div>
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2 opacity-60">
                      <Mail size={14} />
                      {user.email}
                    </div>
                  </td>
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-2">
                       <Shield size={14} className={user.role === "ADMIN" ? "text-red-500" : "text-green-600"} />
                       <span className={`text-[10px] font-bold uppercase tracking-widest ${user.role === "ADMIN" ? "text-red-600" : "text-green-700"}`}>
                         {user.role}
                       </span>
                    </div>
                  </td>
                  <td className="px-8 py-5 opacity-60">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
