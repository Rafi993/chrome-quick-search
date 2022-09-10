import { Command } from 'cmdk';
import { useEffect, useRef, useState } from 'react';
import FocusLock from 'react-focus-lock';
import styled from 'styled-components';
import { useClickOutside } from '../../hooks/useClickOutside';
import { commands, subCommands } from '../commands';
import { List } from './List';
import { Search } from './Search';

const StyledCommandMenu = styled.dialog`
  background: #282828;
  border: none;
  display: block;
  padding: 0;
  border-radius: 16px;
  position: fixed;
  width: 600px;
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
  const [isLoading, setLoading] = useState(false);
  const [bookmarks, setBookmarks] = useState([]);

  useClickOutside({ ref: containerRef, handleClose });

  useEffect(() => {
    try {
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.topWebsites) {
          setTopWebsites(request.topWebsites);
        }

        if (request.bookmarks) {
          setBookmarks(request.bookmarks);
        }
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleKey = (event) => {
      const { key } = event;

      if (key === 'Escape') {
        if (parentCommand) {
          setSearch('');
          setParentCommand(null);
          setBookmarks([]);
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

  const handleWebsite = ({ url }) => {
    chrome.runtime.sendMessage({
      command: 'open_url',
      url,
    });
    handleClose();
  };

  const handleCommand = (request) => {
    const { key: command } = request;

    switch (command) {
      case 'delete_data':
        setSearch('');
        setParentCommand('delete_data');
        return;
      case 'desktop_capture':
        handleClose();
        setTimeout(() => {
          chrome.runtime.sendMessage({
            command,
          });
        }, 0);
        return;
      case 'bookmarks':
        setSearch('');
        setParentCommand('bookmarks');
        chrome.runtime.sendMessage({
          command,
        });
        return;
      case 'search':
        chrome.runtime.sendMessage({
          command,
          search: request.text,
        });
        return;
      default:
        chrome.runtime.sendMessage({
          command,
        });
        handleClose();
        return;
    }
  };

  const handleSubCommand = ({ key: subCommand }) => {
    switch (subCommand) {
      default:
        chrome.runtime.sendMessage({
          command: parentCommand,
          subCommand,
        });
    }

    handleClose();
  };

  if (isLoading) return null;

  const getList = () => {
    if (parentCommand === 'bookmarks' && bookmarks.length > 0) {
      return (
        <List
          heading="Bookmarks"
          commands={bookmarks}
          handleCommand={handleWebsite}
        />
      );
    }

    if (parentCommand && parentCommand !== 'bookmarks') {
      return (
        <List
          heading={subCommands[parentCommand].title}
          commands={subCommands[parentCommand].commands}
          handleCommand={handleSubCommand}
        />
      );
    }

    return (
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
        <Search handleCommand={handleCommand} search={search} />
      </>
    );
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

            {getList()}
          </Command.List>
        </Command>
      </StyledCommandMenu>
    </FocusLock>
  );
};
