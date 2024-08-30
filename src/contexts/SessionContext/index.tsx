import { createContext, useState, Dispatch, SetStateAction } from "react";
import StyleContext from "@contexts/StyleContext";
import RouterContext from "@contexts/RouterContext";

export interface SessionContextType {
  isThemeDark: boolean;
  setIsThemeDark: Dispatch<SetStateAction<boolean>>;
}

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  return theme === "dark";
};

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);

const useSessionProvider = () => {
  const [isThemeDark, setIsThemeDark] = useState(getTheme());
  return { isThemeDark, setIsThemeDark };
};

const SessionProvider = () => {
  const data = useSessionProvider();
  return (
    <SessionContext.Provider value={data}>
      <StyleContext isThemeDark={data.isThemeDark}>
        <RouterContext />
      </StyleContext>
    </SessionContext.Provider>
  );
};

export default SessionProvider;
