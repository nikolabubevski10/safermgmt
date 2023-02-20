import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
i18n
 .use(LanguageDetector)
 .use(initReactI18next)
 .init({
  lng: 'en',
  fallbackLng: 'en',
  debug: true,
  keySeparator: false,
  saveMissing: true,
  interpolation: {
    escapeValue: false, // react already protects from xss
  },
});
 
export default i18n;
