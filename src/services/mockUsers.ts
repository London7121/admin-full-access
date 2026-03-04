import { ROLE_PERMISSIONS, ROLES } from "@/config/roles.config";


export interface MockUser {
  id: number;
  username: string;
  avatar: string;
  password: string;
  roles: string[];
  permissions: string[];
}

export const mockUsers: MockUser[] = [
  {
    id: 1,
    username: "superadmin",
    password:"super123",
    roles: [ROLES.SUPER_ADMIN],
    permissions: ROLE_PERMISSIONS.super_admin,
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s"
  },
  {
    id: 2,
    username: "manager_user",
    password:"manager123",
    roles: [ROLES.MANAGER],
    permissions: ROLE_PERMISSIONS.manager,
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s"
  },
  {
    id: 3,
    username: "operator_user",
    password:"operato123",
    roles: [ROLES.OPERATOR],
    permissions: ROLE_PERMISSIONS.operator,
    avatar:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf1fiSQO7JfDw0uv1Ae_Ye-Bo9nhGNg27dwg&s"
  },
];
