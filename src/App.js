import React, { Component } from 'react';
import { IntlProvider } from 'react-intl';
import request from 'superagent';
import locale2 from 'locale2';
import iso3166 from 'iso3166-1';

import LanguageEnum from './enumerations/LanguageEnum';
import defaultLanguage from './constants/defaultLanguage';

import Routes from './Routes';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    const isoLang = iso3166.from(locale2).to2();
    const language = LanguageEnum[isoLang] || defaultLanguage;
    
    this.getLanguage = this.getLanguage.bind(this);
    this.onSetLanguage = this.onSetLanguage.bind(this);
    
    this.state = {
      language: language,
      translations: null,
      name: 'Eric',
      unreadCount: 1000,
    };
  }
  
  getLanguage(language) {
    request.get(`/languages/${language.value}.json`, (err, res) => {
      this.setState({
        language: language,
        translations: res ? res.body : {},
      });
    });
  }
  
  onSetLanguage(language) {
    this.getLanguage(language);
  }
  
  componentDidMount() {
    const { language } = this.state;
    this.getLanguage(language);
  }
  
  render() {
    const { language, translations } = this.state;
    return (
      <IntlProvider locale={language.locale} messages={translations}>
        <div className="App">
          <Routes/>
        </div>
      </IntlProvider>
    );
  }
}

export default App;
