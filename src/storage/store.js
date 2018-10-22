import { action, observable, decorate } from 'mobx';

import windowResizeListener from '../listeners/windowResize';
import windowKeydownListener from '../listeners/windowKeydown';
import windowStorageListener from '../listeners/windowStorage';

class Store {
  count = 0;
  screen = {
    availHeight: window.screen.availHeight,
    availLeft  : window.screen,
    availTop   : window.screen.availTop,
    availWidth : window.screen.availWidth,
    colorDepth : window.screen.colorDepth,
    height     : window.screen.height,
    orientation: {
      angle: window.screen.orientation.angle,
      type : window.screen.orientation.type,
    },
    pixelDepth : window.screen.pixelDepth,
    width      : window.screen.width,
  };
  height = window.innerHeight;
  width = window.innerWidth;
  key = undefined;
  debugger = false;
  localStorage = {};
  sessionStorage = {};
  
  constructor() {
    window.dispatchEvent(new Event('resize'));
  }
  
  setScreen(screen, { width, height }) {
    this.screen = Object.assign({}, screen);
    this.height = height;
    this.width = width;
  }
  
  setDebugger(value = false) {
    this.debugger = value;
  }
  
  setKey(value) {
    this.key = value;
  }
  
  increment() {
    this.count++;
  };
  decrement() {
    this.count--;
  };
  
  setLocalStore(storage) {
    this.localStorage = JSON.parse(storage);
  }
  
  setSessionStore(storage) {
    this.sessionStorage = JSON.parse(storage);
  }
}

decorate(Store, {
  screen: observable,
  height: observable,
  width: observable,
  count: observable,
  debugger: observable,
  key: observable,
  localStorage: observable,
  sessionStorage: observable,
  increment: action,
  decrement: action,
  setScreen: action,
  setDebugger: action,
  setKey: action,
  setLocalStore: action,
  setSessionStore: action,
});

const appStore = new Store();

windowResizeListener(appStore);
windowKeydownListener(appStore);
windowStorageListener(appStore);

export default appStore;