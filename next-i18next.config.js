/** @type {import('next-i18next').UserConfig} */
const i18nConfig = {
    i18n: {
      defaultLocale: 'fi',
      locales: ['en', 'fi'],
      localeDetection: false,
      localePath: './public/locales'
    }
  };
  
export default i18nConfig;
  