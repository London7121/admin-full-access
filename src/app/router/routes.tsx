import { Route, Routes, Navigate } from "react-router-dom";
import { PATHS } from "./paths";

import AuthGuard from "./guards/AuthGuard";
import GuestGuard from "./guards/GuestGuard";
import PermissionGuard from "./guards/PermissionGuard";

import Forbidden from "@/pages/Forbidden";
import NotFound from "@/pages/NotFound";
import RolesPage from "@/pages/RolesPage";
import DashboardPage from "@/pages/dashboard/DashboardPage";
import MainLayout from "../layouts/MainLayout";

import { PERMISSIONS } from "@/config/permissions.config";
import LoginPage from "@/pages/auth/LoginPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path={PATHS.ROOT}
        element={<Navigate to={PATHS.DASHBOARD} replace />}
      />

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
          <Route path={PATHS.DASHBOARD} element={<DashboardPage />} />

          <Route
            path={PATHS.ROLES}
            element={
              <PermissionGuard permission={PERMISSIONS.VIEW_ROLES}>
                <RolesPage />
              </PermissionGuard>
            }
          />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
