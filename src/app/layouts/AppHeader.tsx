import {
  Layout,
  Button,
  Avatar,
  Dropdown,
  Space,
  Typography,
  theme,
} from "antd";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { PATHS } from "@/app/router/paths";
import ThemeSwitcher from "@/components/theme/ThemeSwitcher";

const { Header } = Layout;
const { Text } = Typography;

interface Props {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
}

const AppHeader = ({ collapsed, setCollapsed }: Props) => {
  const { user, logout } = useAuth();
  const { token } = theme.useToken();
  const navigate = useNavigate();

  const items = [
    {
      key: "profile",
      icon: <UserOutlined />,
      label: "Profile",
      onClick: () => navigate("/profile"),
    },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings",
      onClick: () => navigate(PATHS.SETTINGS),
    },
    {
      type: "divider" as const,
    },
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: "Logout",
      danger: true,
      onClick: logout,
    },
  ];

  return (
    <Header
      style={{
        padding: "0 16px",
        background: token.colorBgContainer,
        borderBottom: `1px solid ${token.colorBorder}`,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={() => setCollapsed(!collapsed)}
        style={{ fontSize: 18, color: token.colorText }}
      />

      <div
        style={{
          padding: "0 16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <ThemeSwitcher />
        <Dropdown menu={{ items }} placement="bottomRight">
          <Space style={{ cursor: "pointer" }}>
            <Avatar size="default" src={user?.avatar} icon={<UserOutlined />} />
            <Text style={{ color: token.colorText }} strong>
              {user?.username || "Admin"}
            </Text>
          </Space>
        </Dropdown>
      </div>
    </Header>
  );
};

export default AppHeader;
