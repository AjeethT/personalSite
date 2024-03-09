import i18next from "i18next";
import en from "../locales/en-translation.json";
import ta from "../locales/ta-translation.json";
import { createI18nStore } from "svelte-i18next";


i18next.init({
    interpolation: { escapeValue: false }, // React already does escaping
    lng: "en", // language to use
    resources:{
        en: {
            translation: en
        },
        ta:{
            translation: ta
        }
    }
});
export default ()=>createI18nStore(i18next);