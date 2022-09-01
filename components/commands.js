import { sub } from 'date-fns';

export const subCommands = {
  delete_data: {
    title: 'How much data you want to delete?',
    commands: [
      {
        label: 'Last 1 hour',
        key: sub(new Date(), { hours: 1 }).getTime(),
      },
      {
        label: 'Last week',
        key: sub(new Date(), { weeks: 1 }).getTime(),
      },
      {
        label: 'Forever',
        key: 0,
      },
    ],
  },
};

export const commands = [
  {
    label: 'Close Tab',
    key: 'close_tab',
    emoji: '🗑️',
  },
  {
    label: 'Close Other Tabs',
    key: 'close_inactive_tabs',
    emoji: '🗑️',
  },
  {
    label: 'New Tab',
    key: 'new_tab',
    emoji: '✨',
  },
  {
    label: 'Duplicate Tab',
    key: 'duplicate_tab',
    emoji: '🙂🙂',
  },
  {
    label: 'New Window',
    key: 'new_window',
    emoji: '✨',
  },
  {
    label: 'New Private Window',
    key: 'new_private_window',
    emoji: '🕵️‍♂️',
  },
  {
    label: 'Close Window',
    key: 'close_window',
    emoji: '🗑️',
  },
  {
    label: 'Fullscreen mode',
    key: 'full_screen',
    emoji: '🪟',
  },
  { label: 'Settings', key: 'settings', emoji: '⚙️' },
  { label: 'Extensions', key: 'extensions', emoji: '🏗️' },
  { label: 'History', key: 'history', emoji: '📜' },
  {
    label: 'Downloads',
    key: 'downloads',
    emoji: '📥',
  },
  { label: 'Bookmarks', key: 'bookmarks', emoji: '⭐', hasChildren: true },
  { label: 'Bookmark manager', key: 'bookmark_manager', emoji: '🗄️' },
  {
    label: 'Clear Browsing Data',
    key: 'delete_data',
    hasChildren: true,
    emoji: '❌',
  },
  {
    label: 'Capture Screenshot',
    key: 'desktop_capture',
    emoji: '📸',
  },
];
