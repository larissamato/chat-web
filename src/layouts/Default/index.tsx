import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import { useTheme } from "styled-components";
import MessageProvider from "@contexts/MessageContext";
const { Content } = Layout;
const Default = () => {
  const theme = useTheme();
  return (
    <MessageProvider>
      <Layout style={{ backgroundColor: theme.background, minHeight: "100vh" }}>
        <Layout style={{ padding: "16px", backgroundColor: theme.background }}>
          <Content
            style={{
              backgroundColor: theme.background,
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </MessageProvider>
  );
};

export default Default;
