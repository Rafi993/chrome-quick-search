chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['index.js'],
  });
});

chrome.commands.onCommand.addListener((command) => {
  console.log(`Command "${command}" called`);
});
