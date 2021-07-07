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
    this.messagesMap = {
      'en': English,
      'ca': Catalan
    };

    // Methods
    this.checkLocale = (locale) => {
      if (!(locale in this.messagesMap)) { // Set default locale
        locale = this.defLocale;
      }
      return locale;
    };

    this.getBrowserLanguage = () => {
      const browserLocale = navigator.language.split(/[-_]/)[0];
      return this.checkLocale(browserLocale);
    };

    this.changeLanguage = (locale) => {
      locale = this.checkLocale(locale);
      this.setState({locale: locale, messages: this.messagesMap[locale]});
      const htmlTag = document.getElementsByTagName('html')[0];
      if (htmlTag != null) {
          htmlTag.setAttribute('lang', locale);
      }
    };
    
    // Note: Pass everything in state to avoid creating object inside render method (like explained in the documentation)
    const browserLocale = this.getBrowserLanguage();
    this.state = {locale: browserLocale, messages: this.messagesMap[browserLocale], changeLanguage: this.changeLanguage};
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
