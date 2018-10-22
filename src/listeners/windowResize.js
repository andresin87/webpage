import debounce from 'lodash/debounce';
import interactivityTimeInterval from '../constants/interactivityTimeInterval';

export default (appStore) => {
  const fn = () => appStore.setScreen({
    availHeight: window.screen.availHeight,
    availLeft: window.screen,
    availTop: window.screen.availTop,
    availWidth: window.screen.availWidth,
    colorDepth: window.screen.colorDepth,
    height: window.screen.height,
    orientation: {
      angle: window.screen.orientation.angle,
      type: window.screen.orientation.type,
    },
    pixelDepth: window.screen.pixelDepth,
    width: window.screen.width,
  }, {
    height: window.innerHeight,
    width: window.innerWidth,
  });
  
  const debouncedFunction = debounce(fn, interactivityTimeInterval);
  
  window.addEventListener('resize', () => {
    debouncedFunction();
  });
};