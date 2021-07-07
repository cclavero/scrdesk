// Imports
import React from 'react';

// Components
import { IntlCtx } from './IntlWrapperCmp';

// Component
export const LanguageSwitchCmp = () => {

  const { locale, changeLanguage } = React.useContext(IntlCtx);

  return(
    <select name="locale" value={locale} onChange={(ev) => changeLanguage(ev.target.value)} className="browser-default custom-select">
      <option value="en">English</option>
      <option value="ca">Catalan</option>
    </select>
  );
};
