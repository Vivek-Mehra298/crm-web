import { Button, Card, Input, Typography, Space, message } from "antd";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const { Title, Text } = Typography;

export default function Signup() {
  const [, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, login } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      // 1️⃣ Sign up user in Firebase
      await signup(email, password);

      // 2️⃣ Optional: Auto login is already done after signup in Firebase
      await login(email, password);

      message.success("Account created successfully!");
      navigate("/"); // redirect to dashboard
    } catch (err: any) {
      message.error(err.message);
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f0f2f5",
      }}
    >
      <Card style={{ width: 380, borderRadius: 12 }}>
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          <Title level={3} style={{ textAlign: "center" }}>
            Create Account
          </Title>

          <Input
            size="large"
            placeholder="Full Name"
            onChange={(e) => setName(e.target.value)}
            prefix={<UserOutlined />}
          />

          <Input
            size="large"
            placeholder="Email"
            prefix={<MailOutlined />}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Input.Password
            size="large"
            placeholder="Password"
            prefix={<LockOutlined />}
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button type="primary" size="large" block onClick={handleSignup}>
            SignUp
          </Button>

          <Text style={{ textAlign: "center" }}>
            Already have an account?{" "}
            <Button type="link" onClick={() => navigate("/login")}>
              Login
            </Button>
          </Text>
        </Space>
      </Card>
    </div>
  );
}

