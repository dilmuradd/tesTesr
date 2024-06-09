import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import uz from './uz.json';
import ru from './ru.json';

i18next
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            uz: { translation: uz },
            ru: { translation: ru }
        },
        lng: "uz",
        fallbackLng: "uz",
        debug: true
    });

export default i18next;
