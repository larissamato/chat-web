import { useTheme } from "styled-components";

interface IconProps {
  name: string;
  size?: number | string;
  color?: string;
}

const Icon = ({ name, size, color, ...props }: IconProps) => {
  const theme = useTheme();

  return (
    <i
      {...props}
      className={name}
      style={{ fontSize: size || 14, color: theme[color] || theme.icons }}
    />
  );
};

export default Icon;
