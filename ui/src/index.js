// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import { reportWebVitals } from './reportWebVitals';
import { I18NService } from './service/i18n';
import { APIService } from './service/api';
import { StorageService } from './service/storage';

// MDB React
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// Resources
import './asset/css/index.css';

// Main component
import { AppPg } from './page/app/AppPg';

// App context
const appCtx = initAppCtx();

// Main
ReactDOM.render(
  <React.StrictMode>
    <IntlProvider defaultLocale={appCtx.i18nSer.getDefLocale()} locale={appCtx.i18nSer.getLocale()} key={appCtx.i18nSer.getLocale()}
      messages={appCtx.i18nSer.getMessages()}>
      <AppPg appCtx={appCtx} />
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// Performance
// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Internal functins ---------------------------------------------------------------

function initAppCtx() {
  return {
    i18nSer: new I18NService(),
    apiSer: new APIService(),
    storageSer: new StorageService()
  };
}