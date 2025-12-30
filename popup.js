const rotatePage = (degrees) => {
  document.documentElement.style.transform = `rotate(${degrees}deg)`;
  document.documentElement.style.transformOrigin = "center";
  document.documentElement.style.height = "100vh";
  document.documentElement.style.width = "100vw";
};

const setRotation = (deg) => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.scripting.executeScript({
      target: { tabId: tabs[0].id },
      func: rotatePage,
      args: [deg]
    });
  });
};

document.getElementById('rot0').addEventListener('click', () => setRotation(0));
document.getElementById('rot90').addEventListener('click', () => setRotation(90));
document.getElementById('rot180').addEventListener('click', () => setRotation(180));
document.getElementById('rot270').addEventListener('click', () => setRotation(270));