import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User } from '@/types/auth';

interface AuthState {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
  register: (user: User) => void;
  isAuthenticated: () => boolean;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      login: (user) => set({ user }),
      logout: () => set({ user: null }),
      register: (user) => set({ user }),
      isAuthenticated: () => Boolean(get().user),
    }),
    {
      name: 'diana-gift-auth',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export const authSelectors = {
  isAuthenticated: (state: AuthState) => Boolean(state.user),
};
