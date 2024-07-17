export const getStoredLanguage = () => {
    return localStorage.getItem('i18nextLng') || 'en';
  };
  
  export const setStoredLanguage = (language) => {
    localStorage.setItem('i18nextLng', language);
  };
  