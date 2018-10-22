import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';

import LanguageSelector from '../LanguageSelector/LanguageSelector';
import Menu from '../Menu/Menu';

export default class Page extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const classes = this.props.className || '';
    return (
      <div className={['page-wrapper'].concat(classes).join(' ')}>
        <section className="language-selector">
          <LanguageSelector handleSetLanguage={this.onSetLanguage}/>
        </section>
        <section>
          <Menu />
        </section>
        <section className="title">
          <h1><FormattedMessage id={this.props.title}/></h1>
        </section>
        <section className="page-content">
          {this.props.children}
        </section>
      </div>
    );
  }
}