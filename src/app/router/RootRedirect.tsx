// import { useAuth } from "@/hooks/useAuth";
// import { getDefaultRouteByPermissions } from "@/utils/getDefaultRoute";
// import { PATHS } from "./paths";
// import { Navigate } from "react-router-dom";

// const RootRedirect = () => {
//   const { user } = useAuth();

//   if (!user) {
//     return <Navigate to={PATHS.AUTH.LOGIN} replace />;
//   }

//   if (!user.permissions || user.permissions.length === 0) {
//     return null;
//   }

//   const defaultPath = getDefaultRouteByPermissions(user.permissions);

//   return <Navigate to={defaultPath} replace />;
// };

// export default RootRedirect;

// src/app/router/RootRedirect.tsx
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { PATHS } from "@/app/router/paths";
import { getDefaultRouteByPermissions } from "@/utils/getDefaultRoute";

const RootRedirect = () => {
  const { user } = useAuth();

  if (!user) return <Navigate to={PATHS.AUTH.LOGIN} replace />;

  if (!user || !user.permissions || user.permissions.length === 0) return null; // loader yoki null

  const defaultPath = getDefaultRouteByPermissions(user.permissions);

  return <Navigate to={defaultPath} replace />;
};

export default RootRedirect;
