import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { PATHS } from "../paths";

interface Props {
  permission: string;
  children: React.ReactNode;
}

const PermissionGuard = ({ permission, children }: Props) => {
  const { hasPermission } = useAuth();

  if (!hasPermission(permission)) {
    return <Navigate to={PATHS.FORBIDDEN} replace />;
  }

  return <>{children}</>;
};

export default PermissionGuard;
