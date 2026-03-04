import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { PATHS } from "../paths";

const AuthGuard = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return (
      <Navigate to={PATHS.AUTH.LOGIN} state={{ from: location }} replace />
    );
  }

  return <Outlet />;
};

export default AuthGuard;
