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
    console.log('request', request);
    switch (request.command) {
      case 'close_tab':
        chrome.tabs.remove(sender.tab.id, () => {});
        return;
    }
  });
});
