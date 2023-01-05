import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {HideContext} from './context/HideContext';
import WebFont from 'webfontloader'

WebFont.load ({
  google: {
    families: ['Red Hat Display:300,500,700']
  }
});

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HideContext>
      <App />
    </HideContext>
  </React.StrictMode>
);
