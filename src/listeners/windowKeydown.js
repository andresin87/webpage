export default (appStore) => {
  window.addEventListener('keydown', (event) => {
    const { altKey, ctrlKey, keyCode, shiftKey } = event;
    switch (keyCode) {
      case 68: // d
        if (altKey && ctrlKey && shiftKey) {
          appStore.setDebugger(!appStore.debugger);
        }
        break;
    }
    appStore.setKey(event.keyCode);
  });
};