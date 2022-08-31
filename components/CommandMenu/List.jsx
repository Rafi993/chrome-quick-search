import { Command } from 'cmdk';

export const List = ({ heading, commands, handleCommand }) => (
  <Command.Group heading={heading}>
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
);
