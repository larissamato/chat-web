import { PropsWithChildren, createContext } from "react";
import { MessageInstance } from "antd/es/message/interface";
import { message } from "antd";

export const MessageContext = createContext<MessageInstance | undefined>(
  undefined
);

const MessageProvider = ({ children }: PropsWithChildren) => {
  const [messageApi, contextHolder] = message.useMessage();
  return (
    <MessageContext.Provider value={messageApi}>
      <>
        {contextHolder}
        {children}
      </>
    </MessageContext.Provider>
  );
};

export default MessageProvider;
