import { create } from "zustand";

interface UserStore {
  role: string | null;
  setRole: (role: string) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
}));
