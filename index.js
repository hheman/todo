import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { AuthenticationProvider } from './src/AuthenticationProvider';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import store from './src/store/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AuthenticationProvider>
          <App />
        </AuthenticationProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
