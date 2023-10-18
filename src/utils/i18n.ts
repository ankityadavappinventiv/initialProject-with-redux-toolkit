import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        global: en,
      },
      es: {
        global: es,
      },
    } as const,
    debug: false,
    ns: ['global'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: true,
      formatSeparator: ',',
    },
  })
  .then(() => i18n.reloadResources());
export default i18n;
