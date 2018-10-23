import { Enum } from 'enumify';

class StorageTypeEnum extends Enum {
  toJSON() {
    return this.value;
  }
}

StorageTypeEnum.initEnum({
  LOCALSTORAGE: {
    name: 'LOCALSTORAGE',
    value: 'local',
    target: window.localStorage,
    
  },
  SESSIONSTORAGE: {
    name: 'SESSIONSTORAGE',
    value: 'session',
    target: window.sessionStorage,
  },
});

export default StorageTypeEnum;
