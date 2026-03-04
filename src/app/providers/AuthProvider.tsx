import { useState } from "react";
import { AuthContext, type User } from "../context/AuthContext";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    const token = localStorage.getItem("token");

    if (storedUser && token) {
      return JSON.parse(storedUser);
    }

    return null;
  });

  const login = (userData: User, token: string) => {
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", token);
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
  };

  const hasPermission = (permission: string) =>
    user?.permissions.includes(permission) ?? false;

  const hasRole = (role: string) => user?.roles.includes(role) ?? false;

  return (
    <AuthContext.Provider
      value={{ user, login, logout, hasPermission, hasRole }}
    >
      {children}
    </AuthContext.Provider>
  );
};
