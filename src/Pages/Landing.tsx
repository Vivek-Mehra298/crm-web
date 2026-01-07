import { Button, Typography, Space } from "antd";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const { Title, Paragraph } = Typography;

export default function Landing() {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div style={{ minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center", padding: "20px" }}>
            <Space align="center" style={{ width: "100%", maxWidth: "600px" }}>
                <div style={{ width: "100%" }}>
                    <Title level={isMobile ? 2 : 1} style={{ textAlign: "center" }}>
                        My CRM Platform
                    </Title>
                    <Paragraph style={{ textAlign: "center", fontSize: isMobile ? "14px" : "16px" }}>
                        A modern CRM built with React, TypeScript, Ant Design, React Query and Firebase.
                    </Paragraph>

                    <Space style={{ width: "100%", justifyContent: "center", display: "flex", flexWrap: "wrap", gap: "10px" }}>
                        <Button type="primary" size={isMobile ? "middle" : "large"} onClick={() => navigate("/demo")} style={{ width: isMobile ? "100%" : "auto" }}>
                            Try Demo
                        </Button>
                        <Button size={isMobile ? "middle" : "large"} onClick={() => navigate("/login")} style={{ width: isMobile ? "100%" : "auto" }}>
                            Login
                        </Button>
                    </Space>
                </div>
            </Space>
        </div>
    );
}
