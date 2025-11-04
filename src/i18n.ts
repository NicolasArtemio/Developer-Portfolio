import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esTranslation from "./locales/es/translation.json";
import enTranslation from "./locales/en/translation.json";

export const resources = {
  en: {
    translation: enTranslation,
  },
  es: {
    translation: esTranslation,
  },
} as const;

i18n.use(initReactI18next).init({
  resources,

  lng: "es",

  fallbackLng: "en",

  defaultNS: "translation",

  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
