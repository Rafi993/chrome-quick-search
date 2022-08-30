import { Command } from 'cmdk';
import { useRef } from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { useClickOutside } from '../hooks/useClickOutside';
import { commands } from './commands';

const StyledCommandMenu = styled.div`
  position: fixed;
  width: 500px;
  margin: 5% auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999999;
`;

export const CommandMenu = ({ handleClose }) => {
  const containerRef = useRef(null);
  useClickOutside({ ref: containerRef, handleClose });

  const handleCommand = (command) => {
    chrome.runtime.sendMessage({
      command,
    });
    handleClose();
  };

  return (
    <FocusLock>
      <StyledCommandMenu className="framer" ref={containerRef}>
        <Command label="Command Menu">
          <Command.Input autoFocus placeholder="Search" />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            <Command.Group heading="Commands">
              {commands.map((command) => (
                <Command.Item
                  value={command.key}
                  key={command.key}
                  onSelect={() => handleCommand(command.key)}
                >
                  {command.label}
                </Command.Item>
              ))}
            </Command.Group>
          </Command.List>
        </Command>
      </StyledCommandMenu>
    </FocusLock>
  );
};
