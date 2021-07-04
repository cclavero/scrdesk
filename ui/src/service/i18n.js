// Imports
import English from '../lang/en.json';
import Catalan from '../lang/ca.json';

export class I18NService {

    static LocaleIDs = ['en', 'ca'];
    static LocaleMessages = {
        'en': English,
        'ca': Catalan
    };

    constructor() {
        this.defLocale = 'en';
        this.locale = null;
        this.messages = {};
        this.setLocale(navigator.language.split(/[-_]/)[0]);
    };

    getDefLocale = () => {
        return this.defLocale;
    };

    getLocale = () => {
        return this.locale;
    };

    setLocale = (locale) => {
        const localeFound = (I18NService.LocaleIDs.indexOf(locale) > -1);
        if (!localeFound) {
            locale = this.defLocale;
        }
        this.locale = locale;
        this.messages = I18NService.LocaleMessages[this.locale];
        const htmlTag = document.getElementsByTagName('html')[0];
        if (htmlTag != null) {
            htmlTag.setAttribute('lang', this.locale);
        }
    };

    getMessages = () => {
        return this.messages;
    };
    
}
