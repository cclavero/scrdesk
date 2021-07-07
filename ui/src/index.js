// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals } from './reportWebVitals';

// Components
import { APIService } from './service/api';
import { StorageService } from './service/storage';
import { IntlProviderWrapper } from './comp/i18n/IntlWrapperCmp';

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
    <IntlProviderWrapper>
      <AppPg appCtx={appCtx} />
    </IntlProviderWrapper>
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
    apiSer: new APIService(),
    storageSer: new StorageService()
  };
}