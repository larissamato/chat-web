import { useEffect, useState } from "react";
import { useUser } from "@contexts/UserContext";
import { List, Input, Button, Row, Col, Avatar } from "antd";
import Pusher from "pusher-js";
import { api } from "@helpers/api";
import axios from "axios";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const Chat = () => {
  const { user } = useUser();
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");

  useEffect(() => {
    const pusher = new Pusher("1a896bd04c2e7bdcc160", {
      cluster: "us2",
    });

    const channel = pusher.subscribe("chat-channel");
    channel.bind("new-message", (data: { message: string }) => {
      setMessages((prevMessages) => [...prevMessages, data.message]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, []);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== "") {
      await api.post("/message", {
        username: user.name,
        port: user.port,
        message: newMessage,
      });
      setNewMessage("");
    }
  };

  return (
    <Row>
      <Col span={8} style={{ padding: "20px" }}>
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={<a href="https://ant.design">{item.title}</a>}
                description="hahahaha"
              />
            </List.Item>
          )}
        />
      </Col>
      <Col span={16} style={{ padding: "20px" }}>
        <h2>Chat</h2>
        <div style={{ maxHeight: "400px", overflowY: "auto" }}>
          <List
            bordered
            dataSource={messages}
            renderItem={(msg) => <List.Item>{msg}</List.Item>}
          />
        </div>
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onPressEnter={handleSendMessage}
          placeholder="Digite sua mensagem..."
          style={{ marginTop: "10px" }}
        />
        <Button
          type="primary"
          onClick={handleSendMessage}
          style={{ marginTop: "10px" }}
        >
          Enviar
        </Button>
      </Col>
    </Row>
  );
};

export default Chat;
