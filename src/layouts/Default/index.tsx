import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Typography, Divider } from "antd";
import useWindowResize from "@hooks/useWindowResize";
import { useTheme } from "styled-components";
import MessageProvider from "@contexts/MessageContext";
const { Content, Header } = Layout;
const Default = () => {
  const { width } = useWindowResize();
  const [collapsed, setCollapsed] = useState(true);
  const theme = useTheme();
  return (
    <MessageProvider>
      <Layout
        style={{
          backgroundColor: theme.background,
          minHeight: "100vh",
          width: "100vw",
        }}
      >
        <Header
          style={{
            backgroundColor: theme.background,
            textAlign: "center",
            padding: "20px",
            height: "64px",
            lineHeight: "64px",
            width: "100%",
          }}
        >
          <Typography.Title color="white">Chat</Typography.Title>
        </Header>
        <Divider />
        <Content
          style={{
            backgroundColor: theme.background,
            marginLeft: width > 720 ? 80 : 0,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </MessageProvider>
  );
};

export default Default;
