// Imports
import React from 'react';
import ReactDOM from 'react-dom';
import { reportWebVitals } from './reportWebVitals';

// MDB React
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

// Resources
import './asset/css/index.css';

// Main component
import { AppPg } from './page/app/AppPg';

// Main
ReactDOM.render(
  <React.StrictMode>
    <AppPg />
  </React.StrictMode>,
  document.getElementById('root')
);

// Performance
// If you want to start measuring performance in your app, pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();