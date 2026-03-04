// import { Route, Routes } from "react-router-dom";
// import { PATHS } from "./paths";

// import AuthGuard from "./guards/AuthGuard";
// import GuestGuard from "./guards/GuestGuard";
// import PermissionGuard from "./guards/PermissionGuard";

// import Forbidden from "@/pages/Forbidden";
// import NotFound from "@/pages/NotFound";
// import RolesPage from "@/pages/RolesPage";
// import DashboardPage from "@/pages/dashboard/DashboardPage";
// import MainLayout from "../layouts/MainLayout";

// import { PERMISSIONS } from "@/config/permissions.config";
// import LoginPage from "@/pages/auth/LoginPage";
// import RootRedirect from "./RootRedirect";
// import Users from "@/pages/Users";
// import Settings from "@/pages/Settings";
// import Reports from "@/pages/Reports";

// const AppRoutes = () => {
//   return (
//     <Routes>
//       <Route path={PATHS.ROOT} element={<RootRedirect />} />

//       <Route
//         path={PATHS.AUTH.LOGIN}
//         element={
//           <GuestGuard>
//             <LoginPage />
//           </GuestGuard>
//         }
//       />

//       <Route path={PATHS.FORBIDDEN} element={<Forbidden />} />

//       <Route element={<AuthGuard />}>
//         <Route element={<MainLayout />}>
//           <Route
//             path={PATHS.DASHBOARD}
//             element={
//               <PermissionGuard permission={PERMISSIONS.VIEW_DASHBOARD}>
//                 <DashboardPage />
//               </PermissionGuard>
//             }
//           />

//           <Route
//             path={PATHS.ROLES}
//             element={
//               <PermissionGuard permission={PERMISSIONS.VIEW_ROLES}>
//                 <RolesPage />
//               </PermissionGuard>
//             }
//           />

//           <Route
//             path={PATHS.USERS}
//             element={
//               <PermissionGuard permission={PERMISSIONS.VIEW_USERS}>
//                 <Users />
//               </PermissionGuard>
//             }
//           />

//           <Route
//             path={PATHS.REPORTS}
//             element={
//               <PermissionGuard permission={PERMISSIONS.VIEW_REPORTS}>
//                 <Reports />
//               </PermissionGuard>
//             }
//           />

//           <Route
//             path={PATHS.SETTINGS}
//             element={
//               <PermissionGuard permission={PERMISSIONS.VIEW_SETTINGS}>
//                 <Settings />
//               </PermissionGuard>
//             }
//           />
//         </Route>
//       </Route>

//       <Route path="*" element={<NotFound />} />
//     </Routes>
//   );
// };

// export default AppRoutes;

// src/app/router/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";
import { PATHS } from "./paths";
import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import PermissionGuard from "./guards/PermissionGuard";

import RootRedirect from "./RootRedirect";
import NotFound from "@/pages/NotFound";
import Forbidden from "@/pages/Forbidden";

import { APP_ROUTES } from "@/config/routes.config";
import MainLayout from "../layouts/MainLayout";
import LoginPage from "@/pages/auth/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={PATHS.ROOT} element={<RootRedirect />} />

      <Route
        path={PATHS.AUTH.LOGIN}
        element={
          <GuestGuard>
            <LoginPage />
          </GuestGuard>
        }
      />

      <Route path={PATHS.FORBIDDEN} element={<Forbidden />} />

      <Route element={<AuthGuard />}>
        <Route element={<MainLayout />}>
          {APP_ROUTES.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={
                <PermissionGuard permission={route.permission ?? ""}>
                  {route.element}
                </PermissionGuard>
              }
            />
          ))}
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
