import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import LanguageSelector from '../LanguageSelector/LanguageSelector';
import settings from "../../settings";

export default class Page extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Eric',
      unreadCount: 1000,
    }
  }
  render() {
    const { name, unreadCount } = this.state;
    const classes = this.props.className || '';
    return (
      <div className={['page'].join(classes).split(' ')}>
        {this.props.children}
        <LanguageSelector handleSetLanguage={this.onSetLanguage}/>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>
          <FormattedMessage
            id="default-message"
            values={{name: <b>{name}</b>, unreadCount}}
          />
        </p>
        <p>
          {settings.profile}
        </p>
      </div>
    );
  }
}