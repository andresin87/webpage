import React, { Component } from 'react';
import { IntlProvider, FormattedMessage } from 'react-intl';
import request from 'superagent';
import get from 'lodash/get';
import locale2 from 'locale2';
import iso3166 from 'iso3166-1';

import LanguageEnum from './enumerations/LanguageEnum';
import defaultLanguage from './constants/defaultLanguage';

import logo from './logo.svg';
import './App.css';

window.get = get;
window.locale2 = locale2;
window.iso3166 = iso3166;
window.LanguageEnum = LanguageEnum;

class App extends Component {
  constructor(props) {
    super(props);
    const isoLang = iso3166.from(locale2).to2();
    const language = LanguageEnum[isoLang] || defaultLanguage;
    debugger;
    this.state = {
      language: language,
      translations: null,
      name: 'Eric',
      unreadCount: 1000,
    };
  }
  
  componentDidMount() {
    const { language } = this.state;
    request.get(`/languages/${language.value}.json`, (err, res) => {
      this.setState({
        translations: res.body,
      });
    });
  }
  
  render() {
    const { name, unreadCount, language, translations } = this.state;
    return (
      <IntlProvider locale={language.locale} messages={translations}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <p>
            <FormattedMessage
              id="default-message"
              values={{name: <b>{name}</b>, unreadCount}}
            />
          </p>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
