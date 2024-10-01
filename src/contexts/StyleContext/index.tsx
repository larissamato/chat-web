import {
  ReactNode,
  useState,
  useEffect,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import { light, dark } from "@styles/styledTheme";
import { light as antlight, dark as antdark } from "@styles/antTheme";
import { ThemeProvider } from "styled-components";
import { ConfigProvider, ThemeConfig } from "antd";
import en_US from "antd/locale/en_US";
import pt_BR from "antd/locale/pt_BR";

interface StyleContextType {
  children: ReactNode;
  isThemeDark: boolean;
}

interface AlgorismProviderType {
  customProvider: ThemeConfig;
  setCustomProvider: Dispatch<SetStateAction<ThemeConfig>>;
}

const useLanguage = () => {
  const [locale, setLocale] = useState(pt_BR);

  useEffect(() => {
    const lang = window.navigator.language;
    if (lang === "en" || lang === "en-US") {
      setLocale(en_US);
    } else {
      setLocale(pt_BR);
    }
  }, [window.navigator]);

  return { locale };
};

export const AlgorismContext = createContext<Partial<AlgorismProviderType>>({});

const StyleContext = ({ isThemeDark, children }: StyleContextType) => {
  useEffect(() => {
    isThemeDark
      ? document.documentElement.setAttribute("data-color-mode", "dark")
      : document.documentElement.setAttribute("data-color-mode", "light");
  }, [isThemeDark]);
  const [customProvider, setCustomProvider] = useState<Partial<ThemeConfig>>(
    {}
  );
  const { locale } = useLanguage();

  return (
    <AlgorismContext.Provider value={{ customProvider, setCustomProvider }}>
      <ConfigProvider
        theme={
          isThemeDark
            ? { ...antdark, ...customProvider }
            : { ...antlight, ...customProvider }
        }
        locale={locale}
      >
        <ThemeProvider theme={isThemeDark ? dark : light}>
          {children}
        </ThemeProvider>
      </ConfigProvider>
    </AlgorismContext.Provider>
  );
};

export const useCustomContext = () => {
  const context = useContext(AlgorismContext);
  if (context !== undefined) {
    return context as AlgorismProviderType;
  } else {
    throw new Error("Problem with Custom Provider on Style Context");
  }
};

export default StyleContext;
