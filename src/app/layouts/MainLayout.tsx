import { Layout, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import AppHeader from "./AppHeader";

const { Content, Sider } = Layout;

const MainLayout = () => {
  const { token } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: "100vh", background: token.colorBgLayout }}>
      <Sider
        collapsed={collapsed}
        trigger={null}
        style={{
          background: token.colorBgContainer,
        }}
      >
        <AppSidebar />
      </Sider>

      <Layout>
        <AppHeader collapsed={collapsed} setCollapsed={setCollapsed} />

        <Content
          style={{
            margin: 16,
            background: token.colorBgContainer,
            padding: 16,
            borderRadius: token.borderRadiusLG,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
