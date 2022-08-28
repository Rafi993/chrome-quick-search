import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const renderApp = () => {
  const body = document.querySelector('body');
  const app = document.createElement('div');
  app.setAttribute('id', 'quick-search-chrome');
  body.appendChild(app);
  console.log(app);

  const root = ReactDOM.createRoot(app);

  root.render(<App />);
};

renderApp();
