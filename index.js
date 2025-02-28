import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './src/store/store';

import './styles.scss';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
