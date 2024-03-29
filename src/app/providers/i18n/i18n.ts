import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

import { LOCAL_STORAGE_KEYS } from 'shared/constants/localStorageKeys';

const choosedLanguage = localStorage.getItem(LOCAL_STORAGE_KEYS.Language);

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: choosedLanguage || 'en',
    fallbackLng: choosedLanguage || 'en',
    debug: false,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
