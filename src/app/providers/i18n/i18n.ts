import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { LOCAL_STORAGE_KEY_LANG } from 'shared/ui/LangSwitcher';

const choosedLanguage = localStorage.getItem(LOCAL_STORAGE_KEY_LANG);

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: choosedLanguage || 'en',
    fallbackLng: choosedLanguage || 'en',
    debug: IS_DEV,

    interpolation: {
      escapeValue: false,
    },

    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
    },
  });

export default i18n;
