import { Command } from 'cmdk';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';

const StyledCommandMenu = styled.div`
  position: fixed;
  width: 500px;
  margin: 5% auto;
  left: 0;
  right: 0;
  top: 0;
`;

export const CommandMenu = () => {
  return (
    <FocusLock>
      <StyledCommandMenu className="framer">
        <Command label="Command Menu">
          <Command.Input autoFocus placeholder="Search" />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group heading="Commands">
              <Command.Item>Close Tab</Command.Item>
              <Command.Item>Duplicate Tab</Command.Item>
              <Command.Item>Pin Tab</Command.Item>

              <Command.Item>New Window</Command.Item>
              <Command.Item>New Private Window</Command.Item>
              <Command.Item>Close Window</Command.Item>
              <Command.Item>Fullscreen mode</Command.Item>
              <Command.Item>Settings</Command.Item>
              <Command.Item>Extensions</Command.Item>
              <Command.Item>History</Command.Item>
              <Command.Item>Bookmark manager</Command.Item>

              <Command.Item>Delete Browsing Data</Command.Item>
              <Command.Item>Delete Browsing Data</Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </StyledCommandMenu>
    </FocusLock>
  );
};
