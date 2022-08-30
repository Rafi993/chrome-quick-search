import { useEffect, useState } from 'react';
import { CommandMenu } from './CommandMenu';
import { CommandStyles, GlobalStyle } from './globalStyles';

export const App = ({ root }) => {
  const handleClose = () => {
    const app = document.querySelector('#quick-search-chrome');

    if (app) {
      root.unmount();
      app.remove();
    }
  };

  return (
    <div className="dark quick-search">
      <GlobalStyle />
      <CommandStyles />
      <CommandMenu handleClose={handleClose} />
    </div>
  );
};
