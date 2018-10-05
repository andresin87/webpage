import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import WorldIcon from '@atlaskit/icon/glyph/world';
import debounce from 'lodash/debounce';

import LanguageEnum from '../../enumerations/LanguageEnum';

import './LanguageSelector.scss';

export default class LanguageSelector extends Component {
  constructor(props) {
    super(props);
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
    
    this.data = {
      timeout: 500,
    };
    this.state = {
      mouseover: false,
      openned: false,
    };
  }
  closeMenu() {
    if (this.state.openned && !this.state.mouseover) {
      this.setState({ openned: false });
    }
  }
  
  openMenu() {
    this.setState({ openned: true });
  }
  
  mouseEnter() {
    this.setState({ mouseover: true });
  }
  
  mouseOut() {
    this.setState({ mouseover: false });
  }
  
  render() {
    const { handleSetLanguage } = this.props;
    const { openned } = this.state;
    const { openMenu, closeMenu, mouseEnter, mouseOut } = this;
    const { timeout } = this.data;
    const debounceCloseMenu = debounce(() => { closeMenu(); }, timeout);
    const returnedValues = LanguageEnum.enumValues.map(enumeration => (
      <li key={enumeration.literalKey} onClick={() => { handleSetLanguage(enumeration); }}>
        <FormattedMessage id={enumeration.literalKey}/>
      </li>
    ));
    return (
      <div
        className="language-selector"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseOut}
        onMouseMove={debounceCloseMenu}
      >
        {openned ? <ul className="language-selector-menu">{returnedValues}</ul> : <button onClick={openMenu}><WorldIcon /></button>}
      </div>
    );
  }
}