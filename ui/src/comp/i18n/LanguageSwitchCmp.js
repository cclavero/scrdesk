// Imports
import React from 'react';

// Components
import { IntlCtx } from './IntlWrapperCmp';

// Component
export const LanguageSwitchCmp = () => {

  const { locale, getLanguageMap, changeLanguage } = React.useContext(IntlCtx);

  return(
    <select name="locale" value={locale} onChange={(ev) => changeLanguage(ev.target.value)} className="browser-default custom-select">
      {getLanguageMap().map(item => (
      <option value={item.id}>{item.name}</option>
      ))}
    </select>
  );
}