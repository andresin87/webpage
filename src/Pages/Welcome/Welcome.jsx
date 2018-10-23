import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { observer } from 'mobx-react/index';
import StorageTypeEnum from '../../enumerations/StorageTypeEnum';

window.StorageTypeEnum = StorageTypeEnum;

import WelcomeStatus from './WelcomeStatus';
import Input from './Input';

// import FlowType from '../../components/FlowType/FlowType';

import './welcome.scss';
import appStore from "../../storage/store";

class WelcomeCmp extends Component{
  constructor(props) {
    super(props);
    this.renderIntro = this.renderIntro.bind(this);
    this.renderSalute = this.renderSalute.bind(this);
    this.doFocus = this.doFocus.bind(this);
    console.log(window.storage.get(StorageTypeEnum.LOCALSTORAGE.value, 'visitor_name'));
    debugger;
    
    this.state = {
      mode: !window.storage.get(StorageTypeEnum.LOCALSTORAGE.value, 'visitor_name') ? WelcomeStatus.INTRO : WelcomeStatus.SALUTE,
      introClassName: 'welcome-intro__block in',
    }
  }
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        introClassName: 'welcome-intro__block out',
      });
    }, 200); // 2000
    setTimeout(() => {
      this.setState({
        mode: WelcomeStatus.SALUTE,
      });
      this.doFocus();
    }, 450); // 4500
  }
  
  doFocus() {
    if (!this.input) {
      setTimeout(this.doFocus());
    } else {
      this.input.input.focus();
    }
  }
  
  renderIntro() {
    return (
      <React.Fragment>
        <svg className={this.state.introClassName} width="108" viewBox={`0 0 108 20`}>
          <text className="welcome-intro__span-andres" x="0" y="14">andres</text>
          <text className="welcome-intro__span-lucas" x="50" y="14">lucas</text>
          <text className="welcome-intro__span-me" x="94" y="14">.me</text>
        </svg>
      </React.Fragment>
    );
  }
  renderSalute() {
    return (
      <div className="hi-background">
        <div className="hi-title">
          <FormattedMessage id="welcome.hi"/>
        </div>
        <Input ref={(element) => { this.input = element; }} history={this.props.history} />
      </div>
    );
  }
  render() {
    return (
      <React.Fragment>
        <section className="welcome-section">
          {this.state.mode.value === WelcomeStatus.INTRO.value && this.renderIntro()}
          {this.state.mode.value === WelcomeStatus.SALUTE.value && this.renderSalute()}
        </section>
      </React.Fragment>
    );
  }
}

const WelcomeObserver = observer(WelcomeCmp);

const Welcome = (props) => <WelcomeObserver {...props} store={appStore} />;

export default withRouter(Welcome);