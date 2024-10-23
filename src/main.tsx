import React from 'react';
import ReactDOM from 'react-dom/client'; // Import createRoot
import App from './App';
import './index.css';

const rootElement = document.getElementById('app');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
