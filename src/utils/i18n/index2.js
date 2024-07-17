import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import arLang from "./locales/ar/ar.json";

// Define the direction for each locale
const localeDirection = {
  ar: 'rtl',
  en: 'ltr',
};

// Function to set the document direction
const setDocumentDirection = (locale) => {
  const direction = localeDirection[locale] || 'ltr';
  document.documentElement.setAttribute('dir', direction);
  console.log(`Language changed to ${locale}, direction set to ${direction}`);
};

// Set the initial direction based on the saved locale
const savedLocale = localStorage.getItem('i18nextLng') || 'en';
setDocumentDirection(savedLocale);

// the translations
const resources = {
  en: {
    translation: enLang,
  },
  ar: {
    translation: arLang,
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    fallbackLng: "en",
    lng: savedLocale, // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie']
    },
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

// Listen for language changes
i18n.on('languageChanged', (lng) => {
  setDocumentDirection(lng);
});

export default i18n;
