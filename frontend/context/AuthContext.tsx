"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";
import { authClient } from "@/lib/auth-client";

interface AuthContextType {
  isGuest: boolean;
  isModalOpen: boolean;
  openAuthModal: () => void;
  closeAuthModal: () => void;
  requireAuth: (action: () => void) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const { data: session } = authClient.useSession();
  const isGuest = !session?.user;
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openAuthModal = useCallback(() => setIsModalOpen(true), []);
  const closeAuthModal = useCallback(() => setIsModalOpen(false), []);

  const requireAuth = useCallback(
    (action: () => void) => {
      if (isGuest) {
        openAuthModal();
      } else {
        action();
      }
    },
    [isGuest, openAuthModal]
  );

  return (
    <AuthContext.Provider
      value={{
        isGuest,
        isModalOpen,
        openAuthModal,
        closeAuthModal,
        requireAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
