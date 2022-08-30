import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const renderApp = () => {
  if (document.querySelector('#quick-search-chrome')) return;

  const div_root = document.createElement('div');
  div_root.setAttribute('id', 'quick-search-chrome');

  const root = ReactDOM.createRoot(div_root);
  document.body.appendChild(div_root);

  root.render(
    <React.StrictMode>
      <App root={root} />
    </React.StrictMode>,
  );
};

renderApp();
