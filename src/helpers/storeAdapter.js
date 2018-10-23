import objectPath from 'object-path';

import storageKey from '../constants/storageKey';

const storeAdapter = () => {
  const key = storageKey;
  return ({
    /*
     * Store Getter
     * @param {string, oneOfType(['local', 'session'])} - type of storage.
     * @param {sring} path - route path to desired value.
     * @returns {} value to be stored.
     */
    get: (t, path) => {
      if (typeof (Storage) !== 'undefined') {
        let s;
        if (t === 'session') {
          s = JSON.parse(sessionStorage.getItem(key));
          s = objectPath.get(s, path);
        } else if (t === 'local') {
          s = JSON.parse(localStorage.getItem(key));
          s = objectPath.get(s, path);
        }
        s = !s ? '' : s;
        return s;
      }
      return null;
    },
    /*
     * Store Setter
     * @param {string, oneOfType(['local', 'session'])} t - type of storage.
     * @param {sring} path - route path to desired value.
     * @param value - value stored.
     * @returns {boolean}
     */
    set: (t, path, value) => {
      let s;
      if (t === 'session') {
        if (!sessionStorage[key]) {
          sessionStorage.setItem(key, JSON.stringify({}));
        }
        s = JSON.parse(sessionStorage.getItem(key));
        if (s === null) {
          s = {};
        }
        objectPath.set(s, path, value);
        sessionStorage.setItem(key, JSON.stringify(s));
        return true;
      } else if (t === 'local') {
        if (!localStorage[key]) {
          localStorage.setItem(key, JSON.stringify({}));
        }
        s = JSON.parse(localStorage.getItem(key));
        if (s === null) {
          s = {};
        }
        objectPath.set(s, path, value);
        localStorage.setItem(key, JSON.stringify(s));
        return true;
      }
      return false;
    },
    /*
     * Has method - ensures if the variable exists
     * @param {string, oneOfType(['local', 'session'])} t - type of storage.
     * @param {sring} path - route path to desired value.
     * @returns {boolean}
     */
    has: (t, path) => {
      let s;
      if (t === 'session' || t === 'local') {
        if (t === 'session') {
          s = JSON.parse(sessionStorage.getItem(key));
        } else if (t === 'local') {
          s = JSON.parse(sessionStorage.getItem(key));
        }
        return objectPath.has(s, path);
      }
      return false;
    },
    /**
     * Removes the selected object value
     * @param {string, oneOfType(['local', 'session'])} t - type of storage.
     * @param {sring} path - route path to desired value.
     */
    remove: (t, path) => {
      let s;
      if (t === 'session') {
        s = JSON.parse(sessionStorage.getItem(key));
        objectPath.del(s, path);
        sessionStorage.setItem(key, JSON.stringify(s));
      } else if (t === 'local') {
        s = JSON.parse(localStorage.getItem(key));
        objectPath.del(s, path);
        localStorage.setItem(key, JSON.stringify(s));
      }
    },
    /*
     * Clears the selected storage.
     * @param {string, oneOfType(['local', 'session'])} t - type of storage.
     */
    clear: (t) => {
      if (t === 'session' || t === 'local') {
        if (t === 'session') {
          sessionStorage.removeItem(key);
        } else if (t === 'local') {
          localStorage.removeItem(key);
        }
      } else if (!t) {
        localStorage.removeItem(key);
        sessionStorage.removeItem(key);
      }
    },
    flush: () => {
      localStorage.clear();
      sessionStorage.clear();
    },
  });
};

export default storeAdapter;

((callback) => {
  const r = callback();
  if (r) {
    window.storage = r;
  }
})(window.storage ? () => null : storeAdapter);