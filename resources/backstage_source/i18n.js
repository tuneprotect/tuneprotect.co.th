import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import Backend from 'i18next-http-backend';
import {LANGUAGE} from "./config/config";
import en from './asset/locales/en/translation.json';
import th from './asset/locales/th/translation.json';

i18n
    .use(Backend)
    .use(initReactI18next)
    .init({
        whitelist: LANGUAGE,
        fallbackLng: 'en',
        resources: {
            en: {translation: en},
            th: {translation: th}
        },
        lng: 'th',
        debug: false,
        react: {
            useSuspense: false,
        }
    });

export default i18n;
