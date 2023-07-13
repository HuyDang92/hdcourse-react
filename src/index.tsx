import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from 'stores/store';
import AuthState from './features/Auth/authStateChange';

const rootElement: HTMLElement | null = document.getElementById('root');
const root = createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthState>
        <App />
      </AuthState>
    </Provider>
  </React.StrictMode>
);
