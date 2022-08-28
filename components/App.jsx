import { CommandMenu } from './CommandMenu';
import { CommandStyles, GlobalStyle } from './globalStyles';

export const App = () => {
  return (
    <div className="dark">
      <GlobalStyle />
      <CommandStyles />
      <CommandMenu />
    </div>
  );
};
