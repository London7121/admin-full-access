import { PERMISSIONS } from "./permissions.config";

export const ROLES = {
  SUPER_ADMIN: "super_admin",
  MANAGER: "manager",
  OPERATOR: "operator",
} as const;

export type RoleType = (typeof ROLES)[keyof typeof ROLES];

export const ROLE_PERMISSIONS: Record<RoleType, string[]> = {
  super_admin: Object.values(PERMISSIONS),

  manager: [
    PERMISSIONS.VIEW_DASHBOARD,
    PERMISSIONS.VIEW_USERS,
    PERMISSIONS.CREATE_USER,
    PERMISSIONS.EDIT_USER,
    PERMISSIONS.VIEW_REPORTS,
  ],

  operator: [
    PERMISSIONS.VIEW_SETTINGS,
    PERMISSIONS.VIEW_USERS,
    PERMISSIONS.VIEW_SETTINGS,
  ],
};
