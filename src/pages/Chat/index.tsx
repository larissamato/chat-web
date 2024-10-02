import { useEffect, useState } from "react";
import { message } from "antd";
import { UserOutlined } from "@ant-design/icons";
import {
  Input,
  Button,
  Row,
  Col,
  Typography,
  Timeline,
  Space,
  Card,
  Flex,
  Tooltip,
  Avatar,
} from "antd";
import Pusher from "pusher-js";
import { api } from "@helpers/api";
import { useTheme } from "styled-components";

const { Text } = Typography;
interface IMessage {
  message: string;
  time: string;
  username: string;
  port: number;
}

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    const pusher = new Pusher("1a896bd04c2e7bdcc160", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("chat-channel");
    channel.bind("new-message", (data: IMessage) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    const pingServer = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000);
      try {
        await api.get("/ping");
        clearTimeout(timeoutId);
      } catch {
        message.error(
          "O servidor está indisponível (timeout de 10 segundos)",
          7
        );
      }
    };

    const intervalId = setInterval(() => {
      pingServer();
    }, 10000);

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
      clearInterval(intervalId);
    };
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      try {
        await api.post("/message", {
          username: "larissa",
          port: 8000,
          message: newMessage,
        });
        setNewMessage("");
      } catch {
        message.error("Erro ao fazer requisição", 7);
      }
    }
  };

  return (
    <>
      <ChatTimeline data={messages} />
      <Row
        gutter={[16, 16]}
        style={{
          position: "fixed",
          bottom: 10,
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Col span={20}>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onPressEnter={handleSendMessage}
            placeholder="Digite sua mensagem..."
          />
        </Col>
        <Col span={2}>
          <Button type="primary" onClick={handleSendMessage}>
            Enviar
          </Button>
        </Col>
      </Row>
    </>
  );
};

const ChatTimeline = ({ data }: { data: IMessage[] }) => {
  const items: any = [];
  data.map((e) => {
    generateTimeline(e, items);
  });

  return (
    <Col lg={{ span: 18, offset: 3 }} xs={{ span: 22, offset: 1 }}>
      <Timeline items={items} />
    </Col>
  );
};

const generateTimeline = (followup: IMessage, items: any) => {
  items.push({
    children: <FollowupList data={followup} />,
    dot: <ChatAvatar data={followup} />,
  });
};

const FollowupList = ({ data }: { data: IMessage }) => {
  const theme = useTheme();
  return (
    <Col span={24}>
      <Card
        style={{
          backgroundColor: theme.blue,
          color: theme.white,
        }}
      >
        <Space direction="vertical" style={{ width: "100%" }}>
          <TextColor text={`${data.username}`} />
          <TextColor text={data.message} />
          <Flex justify={"flex-end"} align={"flex-end"}>
            <TextColor text={`${data.time} - porta: ${data.port}`} />
          </Flex>
        </Space>
      </Card>
    </Col>
  );
};

const ChatAvatar = ({ data }: { data: IMessage }) => {
  const theme = useTheme();

  return (
    <Tooltip title={data?.username}>
      <Avatar style={{ backgroundColor: theme.blue }} icon={<UserOutlined />} />
    </Tooltip>
  );
};

const TextColor = ({ text, color }: { text: string; color?: string }) => {
  const textColor = color ? color : "white";

  return (
    <Text>
      <div
        style={{ color: textColor }}
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      />
    </Text>
  );
};

export default Chat;
