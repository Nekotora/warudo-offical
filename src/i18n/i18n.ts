import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';


const resources = {
  en: {
    translation: {
      nav: {
        "index": "Index",
        "pricing": "Pricing",
        "faq": "FAQ",
        "document": "Document",
        "download": "Download",
      },
      sloganText1: {
        "Livestream software": "Livestream software",
        "3D animation engine": "3D animation engine",
      },
      sloganText2: {
        "Avatars": "Avatars",
        "Virtual youtuber": "Virtual youtuber",
        "Motion capture": "Motion capture",
        "Broad casting": "Broad casting",
      }
    }
  },
  zh: {
    translation: {
      nav: {
        "index": "首页",
        "pricing": "价格",
        "faq": "FAQ",
        "document": "文档",
        "download": "下载",
      }
    }
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: true,

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;