// Imports
import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';

// Resources
import English from '../../lang/en.json';
import Catalan from '../../lang/ca.json';

// IntlContext
export const IntlCtx = React.createContext();

// IntlProviderWrapper
export class IntlProviderWrapper extends Component {

  constructor(props) {
    super(props);

    // Internal vars
    this.defLocale = 'en';
    this.localeMap = {
      en: {name: 'English', messages: English},
      ca: {name: 'Catalan', messages: Catalan}  
    };
    
    // Methods
    this.checkLocale = (locale) => {
      if (!(locale in this.localeMap)) { // Set default locale
        locale = this.defLocale;
      }
      return locale;
    };

    this.getBrowserLanguage = () => {
      const browserLocale = navigator.language.split(/[-_]/)[0];
      return this.checkLocale(browserLocale);
    };

    this.getLanguageMap = () => {
      const langMap = [];
      for (const id in this.localeMap) {
        langMap.push({id: id, name: this.localeMap[id].name});
      }
      return langMap;
    };

    this.changeLanguage = (locale) => {
      locale = this.checkLocale(locale);
      this.setState({locale: locale, messages: this.localeMap[locale].messages});
      const htmlTag = document.getElementsByTagName('html')[0];
      if (htmlTag != null) {
          htmlTag.setAttribute('lang', locale);
      }
    };
    
    // Note: Pass everything in state to avoid creating object inside render method (like explained in the documentation)
    const browserLocale = this.getBrowserLanguage();
    this.state = {locale: browserLocale, messages: this.localeMap[browserLocale].messages, 
      getLanguageMap: this.getLanguageMap, changeLanguage: this.changeLanguage};
  };

  render() {

    const { children } = this.props;
    const { locale, messages } = this.state;
    
    return (
      <IntlCtx.Provider value={this.state}>
        <IntlProvider defaultLocale={this.defLocale} key={locale} locale={locale} messages={messages}>
          {children}
        </IntlProvider>
      </IntlCtx.Provider>
    );
  };
  
}