import { Container, ActionButton as SActionButton } from "./style";
import { Typography, Space } from "antd";
import Icon from "@common/Icon";
import { useUser } from "@contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";
import { api } from "@helpers/api";

const { Title } = Typography;
interface ActionButtonProps {
  action: () => void;
  icon: string;
  name?: string;
  util: string;
}

const ActionButton = ({ action, icon }: ActionButtonProps) => (
  <SActionButton onClick={action}>
    <Icon color="gray" name={`fa-light ${icon}`} size="30px" />
  </SActionButton>
);

const putTheme = (theme: string) => {
  localStorage.setItem("theme", theme);
};

const LogoutButton = () => {
  const navigate = useNavigate();
  const { setIsThemeDark, setIsLogged, user } = useUser();

  const logout = () => {
    api.post("/leave", { username: user?.name });
    setIsThemeDark(false);
    setIsLogged(false);
    navigate("/");
    localStorage.clear();
  };

  return (
    <SActionButton onClick={logout}>
      <Icon
        color="gray"
        name="fa-light fa-arrow-right-from-bracket"
        data-cy="actions-logout"
        size="30px"
      />
    </SActionButton>
  );
};

const useHeader = () => {
  const { isThemeDark, setIsThemeDark, user, setIsLogged } = useUser();
  const changeTheme = () => {
    setIsThemeDark(!isThemeDark);
    if (!isThemeDark) {
      putTheme("dark");
      return;
    }
    putTheme("default");
  };

  const arr = [
    {
      action: changeTheme,
      icon: ` fa-lightbulb${!isThemeDark ? "-on" : ""} `,
      util: "switch",
    },
  ];
  return { arr, user, setIsLogged };
};
const Header = () => {
  const { arr } = useHeader();
  const theme = useTheme();
  return (
    <Container style={{ backgroundColor: theme.md }}>
      <Title style={{ marginLeft: "20px" }}>Chat</Title>
      <Space>
        {arr.map((e, index) => (
          <ActionButton
            key={`${e.util}_${index}`}
            util={e.util}
            action={e.action}
            icon={e.icon}
          />
        ))}
        <LogoutButton />
      </Space>
    </Container>
  );
};

export default Header;
