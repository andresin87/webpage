import { Enum } from 'enumify';

class WelcomeStatus extends Enum {
  toJSON() {
    return this.value;
  }
}

WelcomeStatus.initEnum({
  INTRO: {
    value: 'INTRO',
  },
  SALUTE: {
    value: 'SALUTE',
  },
});

export default WelcomeStatus;
