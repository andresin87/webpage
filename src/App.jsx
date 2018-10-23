import React from 'react';
import { IntlProvider } from 'react-intl';
import { observer } from 'mobx-react';
import { Component } from 'react';
import request from 'superagent';
import locale2 from 'locale2';
import iso3166 from 'iso3166-1';

import './helpers/storeAdapter';

import Debugger from './components/Debugger/Debugger';
import Routes from './Routes';
import appStore from './storage/store';
import defaultLanguage from './constants/defaultLanguage';
import LanguageEnum from './enumerations/LanguageEnum';

class Main extends Component {
  constructor(props) {
    super(props);
    const isoLang = iso3166.from(locale2).to2();
    const language = LanguageEnum[isoLang] || defaultLanguage;
    
    this.getLanguage = this.getLanguage.bind(this);
    this.onSetLanguage = this.onSetLanguage.bind(this);
    
    this.state = {
      language: language,
      translations: null,
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
          <Debugger>
            <Routes/>
          </Debugger>
        </div>
      </IntlProvider>
    )
  }
}

const MainObserver = observer(Main);

const App = () => <MainObserver store={appStore} />;

export default App;

