import { PERMISSIONS } from "./permissions.config";
import { PATHS } from "@/app/router/paths";

export interface MenuItemType {
  key: string;
  label: string;
  permission?: string;
}

export const MENU_ITEMS: MenuItemType[] = [
  {
    key: PATHS.DASHBOARD,
    label: "Dashboard",
    permission: PERMISSIONS.VIEW_DASHBOARD,
  },
  {
    key: PATHS.USERS,
    label: "Users",
    permission: PERMISSIONS.VIEW_USERS,
  },
  {
    key: PATHS.ROLES,
    label: "Roles",
    permission: PERMISSIONS.VIEW_ROLES,
  },
  {
    key: PATHS.REPORTS,
    label: "Reports",
    permission: PERMISSIONS.VIEW_REPORTS,
  },
  {
    key: PATHS.SETTINGS,
    label: "Settings",
    permission: PERMISSIONS.VIEW_SETTINGS,
  },
];
