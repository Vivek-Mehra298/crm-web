import { Button, Card, Input, Typography, Space } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const { Title, Text } = Typography;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/app", { replace: true });
    } catch (err: any) {
      alert(err.message);
    }
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", background: "#f0f2f5" }}>
      <Card style={{ width: 380, borderRadius: 12 }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={3} style={{ textAlign: "center" }}>Login</Title>

          <Input
            size="large"
            placeholder="Email"
            prefix={<UserOutlined />}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<LockOutlined />}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="primary" size="large" block onClick={handleLogin}>
            Login
          </Button>

          <Text style={{ textAlign: "center" }}>
            Don't have an account?{" "}
            <Button type="link" onClick={() => navigate("/signup")}>
              Sign up
            </Button>
          </Text>
        </Space>
      </Card>
    </div>
  );
}
