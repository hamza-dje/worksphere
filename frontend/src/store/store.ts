import { create } from "zustand";

export enum UserRole {
  ADMIN = "admin",
  FREELANCER = "freelancer",
  CLIENT = "client",
}

interface UserStore {
  role: UserRole;
  setRole: (role: UserRole) => void;
}

export const useUserStore = create<UserStore>((set) => ({
  role: UserRole.CLIENT,
  setRole: (role) => set({ role }),
}));
