import { createContext } from "react";

export interface User {
  id: number;
  username: string;
  avatar: string;
  roles: string[];
  permissions: string[];
}

export interface AuthContextType {
  user: User | null;
  login: (user: User, token: string) => void;
  logout: () => void;
  hasPermission: (permission: string) => boolean;
  hasRole: (role: string) => boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);
