"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { AuthProvider } from "@/context/AuthContext";
import AuthRequiredModal from "@/components/ui/AuthRequiredModal";

const AUTH_ROUTES = ["/auth/login", "/auth/register"];

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAuthPage = AUTH_ROUTES.some((route) => pathname.startsWith(route));

  // The AuthProvider wraps both layouts to ensure state is accessible everywhere,
  // and the Modal can trigger safely without unmounting mid-interaction.
  return (
    <AuthProvider>
      {isAuthPage ? (
        <>{children}</>
      ) : (
        <>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </>
      )}
      <AuthRequiredModal />
    </AuthProvider>
  );
}
