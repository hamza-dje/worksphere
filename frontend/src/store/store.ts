import { create } from "zustand";

export enum UserRole {
  ADMIN = "admin",
  FREELANCER = "freelancer",
  CLIENT = "client",
}

interface UserStore {
  role: UserRole;
  setRole: (role: UserRole) => void;
  id : number;
  setId : (id : number) => void;
  photo : string;
  setPhoto : (photo : string) => void;
  firstName : string;
  setFirstName : (firstName : string) => void;
  lastName : string;
  setLastName : (lastName : string) => void;
  email : string;
  setEmail : (email : string) => void;
  description : string;
  setDescription : (description : string) => void;
  location : string;
  setLocation : (location : string) => void;
  mobile : string;
  setMobile : (mobile : string) => void;
  portfolioLink : string;
  setPortfolioLink : (portfolioLink : string) => void;

}

export const useUserStore = create<UserStore>((set) => ({
  role: UserRole.CLIENT,
  setRole: (role) => set({ role }),
  id: 0,
  setId: (id) => set({ id }),
  photo: "",
  setPhoto: (photo) => set({ photo }),
  firstName: "",
  setFirstName: (firstName) => set({ firstName }),
  lastName: "",
  setLastName: (lastName) => set({ lastName }),
  email: "",
  setEmail: (email) => set({ email }),
  description: "",
  setDescription: (description) => set({ description }),
  location: "",
  setLocation: (location) => set({ location }),
  mobile: "",
  setMobile: (mobile) => set({ mobile }),
  portfolioLink: "",
  setPortfolioLink: (portfolioLink) => set({ portfolioLink }),
}));
