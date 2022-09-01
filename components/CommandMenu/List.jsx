import { Command } from 'cmdk';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  > div {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 4px;
    width: 90%;
    > span {
      padding-right: 8px;
    }
  }
`;

export const List = ({ heading, commands, handleCommand }) => (
  <Command.Group heading={heading}>
    {commands.map((command) => (
      <Command.Item
        value={command.key}
        key={command.key}
        onSelect={() => handleCommand(command)}
      >
        <StyledListItem>
          <div>
            <span>{command.emoji}</span>
            {command.label}
          </div>

          {command.hasChildren && <MdKeyboardArrowRight />}
        </StyledListItem>
      </Command.Item>
    ))}
  </Command.Group>
);
