import { Enum } from 'enumify';

class SVGSkillNameEnum extends Enum {
  toJSON() {
    return this.value;
  }
}

SVGSkillNameEnum.initEnum({
  ORIGINAL: {
    value: 'original',
    weight: 2,
  },
  ORIGINAL_WORDMARK: {
    value: 'original-wordmark',
    weight: 1,
  },
  PLAIN: {
    value: 'plain',
    weight: 4,
  },
  PLAIN_WORDMARK: {
    value: 'plain-wordmark',
    weight: 3,
  },
});

export default SVGSkillNameEnum;
