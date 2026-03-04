import { Menu, theme } from "antd";
import { useAuth } from "@/hooks/useAuth";
import { MENU_ITEMS } from "@/config/menu.config";
import { useNavigate, useLocation } from "react-router-dom";

const AppSidebar = () => {
  const { hasPermission } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { token } = theme.useToken();

  const filteredMenu = MENU_ITEMS.filter(
    (item) => !item.permission || hasPermission(item.permission),
  );

  return (
    <div
      style={{
        height: "100%",
        background: token.colorBgContainer,
        borderRight: `1px solid ${token.colorBorder}`,
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[location.pathname]}
        onClick={({ key }) => navigate(key)}
        style={{
          background: "transparent",
          borderRight: "none",
        }}
        items={filteredMenu.map((item) => ({
          key: item.key,
          label: item.label,
        }))}
      />
    </div>
  );
};
export default AppSidebar;
