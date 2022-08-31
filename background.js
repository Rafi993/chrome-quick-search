const messageHandler = (request, sender, sendResponse) => {
  const tabId = sender.tab.id;

  if (!sender.tab.active) return;

  switch (request.command) {
    case 'close_tab':
      chrome.tabs.remove(tabId, () => {});
      return;
    case 'new_tab':
      chrome.tabs.create({
        url: 'chrome://new-tab-page',
      });
      return;
    case 'duplicate_tab':
      chrome.tabs.create({
        url: sender.tab.url,
      });
      return;
    case 'new_window':
      chrome.windows.create({ focused: true });
      return;
    case 'new_private_window':
      chrome.windows.create({ focused: true, incognito: true });
      return;
    case 'close_window':
      chrome.windows.remove(sender.tab.windowId);
      return;
    case 'full_screen':
      chrome.windows.update(sender.tab.windowId, { state: 'fullscreen' });
      return;
    case 'settings':
      chrome.tabs.create({
        url: 'chrome://settings',
      });
      return;
    case 'extensions':
      chrome.tabs.create({
        url: 'chrome://extensions',
      });
      return;
    case 'history':
      chrome.tabs.create({
        url: 'chrome://history',
      });
      return;
    case 'bookmark_manager':
      chrome.tabs.create({
        url: 'chrome://bookmarks',
      });
      return;
    case 'delete_data':
      try {
        chrome.browsingData.remove(
          {
            since: request.subCommand,
          },
          {
            appcache: true,
            cache: true,
            cacheStorage: true,
            cookies: true,
            downloads: true,
            fileSystems: true,
            formData: true,
            history: true,
            indexedDB: true,
            localStorage: true,
            passwords: true,
            serviceWorkers: true,
            webSQL: true,
          },

          () => {
            console.log('deleted', request.subCommand);
          },
        );
      } catch (error) {
        console.log(error);
      }
      return;
  }
};

const clickHandler = (tab) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: [`index.js`],
    },
    () => {
      chrome.tabs.sendMessage(tab.id, { tabId: tab.id });
    },
  );

  // Adding removing listener before adding them to avoid duplicate event listeners
  chrome.runtime.onMessage.removeListener(messageHandler);
  chrome.runtime.onMessage.addListener(messageHandler);
};

chrome.action.onClicked.removeListener(clickHandler);
chrome.action.onClicked.addListener(clickHandler);
