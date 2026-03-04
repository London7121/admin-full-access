import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { PATHS } from "../paths";
import type { JSX } from "react";

const GuestGuard = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to={PATHS.DASHBOARD} replace />;
  }

  return children;
};

export default GuestGuard;
