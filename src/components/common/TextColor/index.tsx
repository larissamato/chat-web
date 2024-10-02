import { Typography } from "antd";
const { Text } = Typography;

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

export default TextColor;
