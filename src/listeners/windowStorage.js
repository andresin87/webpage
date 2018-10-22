import storageKey from '../constants/storageKey';

export default (appStore) => {
  window.addEventListener('storage', (event) => {
    debugger;
    const { key, newValue, oldValue } = event;
    switch(key) {
      case storageKey:
        if (event.storageArea === sessionStorage) {
          if (newValue !== oldValue) {
            appStore.setSessionStore(newValue);
          }
        } else if (event.storageArea === localStorage) {
          if (newValue !== oldValue) {
            appStore.setLocalStore(newValue);
          }
        }
        break;
      default:
        break;
    }
  });
};