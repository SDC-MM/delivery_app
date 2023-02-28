import mu from './mu.json';
import en from './en.json';
export { en, mu };
import i18next, { InitOptions } from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
    en: {
        translation: en,
    },
    mu: {
        translation: mu,
    },
};

const list_lang = Object.keys(resources);
const default_lang = list_lang[0];
export const languageInit: InitOptions = {
    // debug: true,
    resources,
    fallbackLng: default_lang,
    compatibilityJSON: 'v3',
    react: { useSuspense: false },
};

i18next.use(initReactI18next).init(languageInit);
export { i18next, resources, list_lang, default_lang };