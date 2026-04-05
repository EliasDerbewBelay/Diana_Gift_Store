import Link from "next/link";
import { Bell, ArrowLeft } from "lucide-react";

export default function NotificationsPage() {
  return (
    <div className="min-h-screen bg-[#FBFBE2] font-body text-[#1B1D0E] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-6">
          <Bell className="text-[#735C00]" size={36} />
        </div>
        <span className="font-label uppercase tracking-[0.2em] text-xs text-[#735C00]">
          Notifications
        </span>
        <h1 className="font-headline text-4xl mt-3 mb-4">All caught up</h1>
        <p className="text-[#4d4635] text-sm leading-relaxed mb-10">
          You have no new notifications. We'll let you know when there are
          updates on your orders, new arrivals, or exclusive offers.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[#735C00] text-xs font-label uppercase tracking-widest hover:opacity-70 transition-opacity"
        >
          <ArrowLeft size={14} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}
