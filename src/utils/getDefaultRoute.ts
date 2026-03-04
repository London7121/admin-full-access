// import { MENU_ITEMS } from "@/config/menu.config";
// import { PATHS } from "@/app/router/paths";

// export const getDefaultRouteByPermissions = (permissions: string[]) => {
//   const firstAvailableMenu = MENU_ITEMS.find((item) =>
//     item.permission ? permissions.includes(item.permission) : true,
//   );

//   return firstAvailableMenu?.key || PATHS.FORBIDDEN;
// };

// src/utils/getDefaultRoute.ts
import { APP_ROUTES } from "@/config/routes.config";
import { PATHS } from "@/app/router/paths";

export const getDefaultRouteByPermissions = (permissions: string[]): string => {
  const route = APP_ROUTES.find(
    (r) => !r.permission || permissions.includes(r.permission),
  );
  return route?.path || PATHS.FORBIDDEN;
};
