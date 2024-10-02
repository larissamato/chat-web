import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Layout, Typography, Divider } from "antd";
import useWindowResize from "@hooks/useWindowResize";
import { useTheme } from "styled-components";
import MessageProvider from "@contexts/MessageContext";
import Header from "@components/Layout/Header";
const { Content } = Layout;
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
        <Content
          style={{
            backgroundColor: theme.background,
            marginLeft: width > 720 ? 80 : 0,
          }}
        >
          <Header />
          <Outlet />
        </Content>
      </Layout>
    </MessageProvider>
  );
};

export default Default;
