import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import './index.css';
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary';
import { ContextProvider } from './context/context';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ErrorBoundary>
        <ContextProvider>
          <App />
        </ContextProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </React.StrictMode>
);
