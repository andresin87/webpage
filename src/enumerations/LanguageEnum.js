import { Enum } from 'enumify';

class LanguageEnum extends Enum {
  toJSON() {
    return this.value;
  }
  getFlag() {
    // TODO: return an svg image icon.
    return null;
  }
}

LanguageEnum.initEnum({
  ES_ES: {
    value: 'ES_ES',
    locale: 'es',
    literalKey: 'enumerations.language-enum.ES_ES',
  },
  EN_GB: {
    value: 'EN_GB',
    locale: 'en',
    literalKey: 'enumerations.language-enum.EN_GB',
  },
});

export default LanguageEnum;
