import { Command } from 'cmdk';
import { Emoji, StyledListItem } from './List';

export const Search = ({ search, handleCommand }) => {
  return (
    <Command.Item
      onSelect={() => handleCommand({ key: 'search', text: search })}
      value={`${search}`}
    >
      <StyledListItem>
        <div>
          <Emoji>🔍</Emoji>
          Search {search ? `"${search}"` : ''}
        </div>
      </StyledListItem>
    </Command.Item>
  );
};
