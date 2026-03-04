import { Button, Card, Form, Input, Typography, theme } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useAuth } from "@/hooks/useAuth";
import { mockUsers } from "@/services/mockUsers";
import { useNavigate, useLocation } from "react-router-dom";
import { PATHS } from "@/app/router/paths";

const { Title, Text } = Typography;

const LoginPage = () => {
  const { token } = theme.useToken();
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || PATHS.DASHBOARD;

  const onFinish = (values: { username: string; password: string }) => {
    const user = mockUsers.find((u) => u.username === values.username);

    if (user) {
      login(user, "mock-token");
      navigate(from, { replace: true });
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "12px",
        background: `
          linear-gradient(
            135deg,
            #0b0b0f 0%,
            #1f1f28 50%,
            #dc2626 100%
          )
        `,
      }}
    >
      <Card
        style={{
          width: 380,
          backdropFilter: "blur(16px)",
          background: "rgba(20,20,26,0.75)",
          borderRadius: 16,
          border: `1px solid ${token.colorBorder}`,
        }}
        styles={{
          body: { padding: 32 },
        }}
      >
        <Title level={3} style={{ textAlign: "center", color: "#fff" }}>
          Admin Panel
        </Title>

        <Text
          style={{
            display: "block",
            textAlign: "center",
            marginBottom: 24,
            color: "#ccc",
          }}
        >
          Sign in to continue
        </Text>

        <Form layout="vertical" onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: "Enter username" }]}
          >
            <Input
              prefix={<UserOutlined />}
              placeholder="Username"
              size="large"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{ required: true, message: "Enter password" }]}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Password"
              size="large"
            />
          </Form.Item>

          <Button type="primary" htmlType="submit" size="large" block>
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
