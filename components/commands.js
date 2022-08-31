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
  },
  {
    label: 'Close Other Tabs',
    key: 'close_inactive_tabs',
  },
  {
    label: 'New Tab',
    key: 'new_tab',
  },
  {
    label: 'Duplicate Tab',
    key: 'duplicate_tab',
  },
  {
    label: 'New Window',
    key: 'new_window',
  },
  {
    label: 'New Private Window',
    key: 'new_private_window',
  },
  {
    label: 'Close Window',
    key: 'close_window',
  },
  {
    label: 'Fullscreen mode',
    key: 'full_screen',
  },
  { label: 'Settings', key: 'settings' },
  { label: 'Extensions', key: 'extensions' },
  { label: 'History', key: 'history' },
  {
    label: 'Downloads',
    key: 'downloads',
  },
  { label: 'Bookmark manager', key: 'bookmark_manager' },
  {
    label: 'Delete Browsing Data',
    key: 'delete_data',
    hasChildren: true,
  },
  {
    label: 'Capture Screenshot',
    key: 'desktop_capture',
  },
];
