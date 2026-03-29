import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

interface WaitlistState {
  waitlist: string[];
  addToWaitlist: (productId: string) => void;
  removeFromWaitlist: (productId: string) => void;
  clearWaitlist: () => void;
}

export const useWaitlistStore = create<WaitlistState>()(
  persist(
    (set) => ({
      waitlist: [],
      addToWaitlist: (productId) => {
        set((state) => ({
          waitlist: state.waitlist.includes(productId)
            ? state.waitlist
            : [...state.waitlist, productId],
        }));
      },
      removeFromWaitlist: (productId) => {
        set((state) => ({
          waitlist: state.waitlist.filter((id) => id !== productId),
        }));
      },
      clearWaitlist: () => set({ waitlist: [] }),
    }),
    {
      name: 'diana-gift-waitlist',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
