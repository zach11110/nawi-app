import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enLang from "./locales/en/en.json";
import arLang from "./locales/ar/ar.json";

// Function to get the stored language from local storage
const getStoredLanguage = () => {
  return localStorage.getItem('i18nextLng') || 'en';
};

// Function to set the stored language in local storage
const setStoredLanguage = (language) => {
  localStorage.setItem('i18nextLng', language);
};

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
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
    lng: getStoredLanguage(), // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option
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
  setStoredLanguage(lng);
});

export default i18n;
