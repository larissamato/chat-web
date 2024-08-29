import i18n from "i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import translationPT from "./locales/pt.json";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const resources = {
  en: { translation: translationEN },
  pt: { translation: translationPT },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "pt",
    interpolation: {
      escapeValue: false,
    },
  });

i18next.on("languageChanged", (lng) => {
  import(`dayjs/locale/${lng}`).then(() => {
    dayjs.locale(lng);
    dayjs.extend(customParseFormat);
    dayjs.extend(relativeTime);
  });
});
export default i18n;
