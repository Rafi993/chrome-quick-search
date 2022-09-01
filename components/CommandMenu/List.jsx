import { Command } from 'cmdk';
import styled from 'styled-components';
import { MdKeyboardArrowRight } from 'react-icons/md';

const StyledListItem = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  > div {
    display: flex;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0 4px;
    width: 90%;
  }
`;

const Emoji = styled.div`
  padding-right: 8px;
  min-width: 25px;
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
            <Emoji>{command.emoji}</Emoji>
            {command.label}
          </div>

          {command.hasChildren && <MdKeyboardArrowRight />}
        </StyledListItem>
      </Command.Item>
    ))}
  </Command.Group>
);
