import { Command } from 'cmdk';
import { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { useClickOutside } from '../../hooks/useClickOutside';
import { commands, subCommands } from '../commands';
import { List } from './List';

const StyledCommandMenu = styled.dialog`
  background: #282828;
  border: none;
  display: block;
  padding: 0;
  border-radius: 16px;
  position: fixed;
  width: 500px;
  margin: 5% auto;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999999;
`;

export const CommandMenu = ({ handleClose }) => {
  const [search, setSearch] = useState('');
  const [parentCommand, setParentCommand] = useState(null);
  const [topWebsites, setTopWebsites] = useState([]);
  const containerRef = useRef(null);
  useClickOutside({ ref: containerRef, handleClose });

  useEffect(() => {
    try {
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.topWebsites) {
          setTopWebsites(
            request.topWebsites.slice(0, 4).map((website) => ({
              label: website.title,
              key: website.url,
            })),
          );
        }
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      const { key } = event;

      if (key === 'Escape') {
        if (parentCommand) {
          setParentCommand(null);
        } else {
          handleClose();
        }
      }
    };

    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('keydown', handleKey);
    };
  }, [parentCommand, setParentCommand]);

  const handleWebsite = (url) => {
    chrome.runtime.sendMessage({
      command: 'open_url',
      url,
    });
    handleClose();
  };

  const handleCommand = (command) => {
    switch (command) {
      case 'delete_data':
        setSearch('');
        setParentCommand('delete_data');
        return;
      case 'desktop_capture':
        handleClose();
        chrome.runtime.sendMessage({
          command,
        });

      default:
        chrome.runtime.sendMessage({
          command,
        });
        handleClose();
    }
  };

  const handleSubCommand = (subCommand) => {
    switch (subCommand) {
      default:
        chrome.runtime.sendMessage({
          command: parentCommand,
          subCommand,
        });
    }

    handleClose();
  };

  return (
    <FocusLock>
      <StyledCommandMenu className="framer" ref={containerRef}>
        <Command label="Command Menu">
          <Command.Input
            autoFocus
            placeholder="Search"
            value={search}
            onValueChange={setSearch}
          />
          <Command.List>
            <Command.Empty>No results found.</Command.Empty>

            {parentCommand ? (
              <List
                heading={subCommands[parentCommand].title}
                commands={subCommands[parentCommand].commands}
                handleCommand={handleSubCommand}
              />
            ) : (
              <>
                {topWebsites.length > 0 && (
                  <List
                    heading="Most Visited Websites"
                    commands={topWebsites}
                    handleCommand={handleWebsite}
                  />
                )}

                <List
                  heading="Commands"
                  commands={commands}
                  handleCommand={handleCommand}
                />
              </>
            )}
          </Command.List>
        </Command>
      </StyledCommandMenu>
    </FocusLock>
  );
};
