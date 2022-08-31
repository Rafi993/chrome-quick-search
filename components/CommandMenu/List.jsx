import { Command } from 'cmdk';
import styled from 'styled-components';

const StyledListItem = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 4px;
`;

export const List = ({ heading, commands, handleCommand }) => (
  <Command.Group heading={heading}>
    {commands.map((command) => (
      <Command.Item
        value={command.key}
        key={command.key}
        onSelect={() => handleCommand(command.key)}
      >
        <StyledListItem>{command.label}</StyledListItem>
      </Command.Item>
    ))}
  </Command.Group>
);
