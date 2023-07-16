import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { persistor, store } from 'stores/store';
import AuthState from './features/Auth/authStateChange';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@material-tailwind/react';

const rootElement: HTMLElement | null = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AuthState>
          <BrowserRouter>
            <ThemeProvider>
              <App />
            </ThemeProvider>
          </BrowserRouter>
        </AuthState>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
