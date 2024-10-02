import { useState } from "react";
import {
  Form,
  Input,
  Button,
  InputNumber,
  Flex,
  Typography,
  Col,
  Row,
  message,
} from "antd";
import { useNavigate } from "react-router-dom";
import { api } from "@helpers/api";
import { useUser } from "@contexts/UserContext";

const LoginPage = () => {
  const { setUser, setIsLogged } = useUser();
  const [username, setUsername] = useState<string>("");
  const [port, setPort] = useState<number>();
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const response = await api.post("/join", { username, port });
      if (response.data.status === "joined") {
        setUser({ name: username, port: port });
        setIsLogged(true);
        navigate("/chat");
      } else {
        message.error("Erro ao conectar.");
      }
    } catch (error) {
      console.error("Erro ao fazer o login:", error);
      message.error(
        "Erro ao conectar. Verifique o console para mais detalhes."
      );
    }
  };

  return (
    <Row>
      <Col span={12} offset={12}>
        <h1>Login</h1>
      </Col>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Nome de Usuário" required>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Item>
        <Form.Item label="Porta" required>
          <InputNumber
            value={port}
            onChange={(value) => setPort(value)}
            required
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Entrar
          </Button>
        </Form.Item>
      </Form>
    </Row>
  );
};

export default LoginPage;
