import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import LanguageEnum from '../../enumerations/LanguageEnum';

export default class LanguageSelector {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className="language-selector">
        {Object.keys(LanguageEnum).map(enumKey => (
          <li>
            <FormattedMessage id={LanguageEnum[enumKey].literalKey}/>
          </li>
        ))}
      </ul>
    );
  }
}