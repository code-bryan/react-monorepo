import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { App } from 'core/src/pages/app';

const element = document.getElementById('root') as Element;
const root = ReactDOM.createRoot(element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
