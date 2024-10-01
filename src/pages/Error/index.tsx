import { Layout } from "antd";
import { useRouteError } from "react-router-dom";
import ErrorElement from "@common/ErrorElement";
import { useTheme } from "styled-components";

const Container = Layout;

const Error = ({
  manualError,
  code,
}: {
  manualError?: string;
  code?: number;
}) => {
  const theme = useTheme();
  const error = useRouteError();
  return (
    <Container
      style={{
        display: "flex",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: theme?.background,
      }}
    >
      <ErrorElement
        error={error ? error : { status: code }}
        title={manualError}
        subTitle={error ? String(error) : ""}
      />
    </Container>
  );
};

export default Error;
