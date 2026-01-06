import { useState } from "react";
import {
  DashboardOutlined,
  TeamOutlined,
  LogoutOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, Modal, Grid, Dropdown } from "antd";
import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const { Header, Content, Sider } = Layout;
const { useBreakpoint } = Grid;

function DashboardLayout() {
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const menuItems = [
    { key: "/", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "/leads", icon: <TeamOutlined />, label: "Leads" },
  ];

  const dropdownMenu = {
    style: {
      borderRadius: 12,
      padding: 8,
      background: "linear-gradient(135deg, #1677ff, #4096ff)",
      boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    },
    items: menuItems.map((item) => ({
      ...item,
      label: (
        <span style={{ color: "#fff", fontWeight: 500 }}>{item.label}</span>
      ),
    })),
    onClick: (e: any) => navigate(e.key),
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Sidebar for Desktop */}
      {!screens.xs && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          breakpoint="lg"
          collapsedWidth={80}
          trigger={null}
        >
          <div
            style={{
              color: "white",
              padding: 16,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {collapsed ? "CRM" : "My CRM"}
          </div>

          <Menu
            theme="dark"
            mode="inline"
            onClick={(e) => navigate(e.key)}
            items={menuItems}
          />
        </Sider>
      )}

      <Layout>
        {/* Header */}
        <Header
          style={{
            background: "#fff",
            padding: "0 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Mobile Menu Button */}
          {screens.xs ? (
            <Dropdown menu={dropdownMenu} trigger={["click"]}>
              <Button icon={<MenuOutlined />} type="text" />
            </Dropdown>
          ) : (
            <Button
              icon={<MenuOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              type="text"
            />
          )}

          {/* Logout Button */}
          <Button
            icon={<LogoutOutlined />}
            style={{
              background: "linear-gradient(135deg, #00008B, #1677ff)",
              color: "#fff",
              borderRadius: 8,
            }}
            onClick={()=>setOpen(true)}
          />
        </Header>

        {/* Content */}
        <Content style={{ margin: 16 }}>
          <Outlet />
        </Content>
      </Layout>

      {/* Logout Modal */}
      <Modal
        title="Confirm Logout"
        open={open}
        onOk={handleLogout}
        onCancel={() => setOpen(false)}
        okText="Yes"
        cancelText="No"
      >
        Are you sure you want to logout?
      </Modal>
    </Layout>
  );
}

export default DashboardLayout;


