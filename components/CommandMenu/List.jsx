import { Command } from 'cmdk';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  > span {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 4px;
    width: 90%;
  }
`;

export const List = ({ heading, commands, handleCommand }) => (
  <Command.Group heading={heading}>
    {commands.map((command) => (
      <Command.Item
        value={command.key}
        key={command.key}
        onSelect={() => handleCommand(command.key)}
      >
        <StyledListItem>
          <span>{command.label}</span>

          {command.hasChildren && <MdKeyboardArrowRight />}
        </StyledListItem>
      </Command.Item>
    ))}
  </Command.Group>
);
