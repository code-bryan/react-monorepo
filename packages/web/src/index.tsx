import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import App from 'core/src/pages/app';

import reportWebVitals from './reportWebVitals';

const element = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <App platform='Web' />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
