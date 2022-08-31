chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript(
    {
      target: { tabId: tab.id },
      files: [`index.js`],
    },
    () => {
      chrome.tabs.sendMessage(tab.id, { tabId: tab.id });
    },
  );

  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    const tabId = sender.tab.id;

    console.log('sender', sender);
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
      case 'pin_tab':
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
      case 'extensions':
        chrome.tabs.create({
          url: 'chrome://extensions',
        });
      case 'history':
        chrome.tabs.create({
          url: 'chrome://history',
        });
      case 'bookmark_manager':
        chrome.tabs.create({
          url: 'chrome://bookmarks',
        });
    }
  });
});
