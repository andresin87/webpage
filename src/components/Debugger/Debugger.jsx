import React, { Component } from 'react';
import { observer } from "mobx-react/index";
// import PropTypes from 'prop-types';
// import flowtype from 'flowtype-js';

import './Debugger.scss';
import appStore from '../../storage/store';

class Debugger extends Component {
  constructor(props) {
    super(props);
    this.handleInc = this.handleInc.bind(this);
    this.handleDec = this.handleDec.bind(this);
  }
  
  handleInc() {
    this.props.store.increment()
  }
  
  handleDec() {
    this.props.store.decrement()
  }
  
  render() {
    return (
      <React.Fragment>
        <div
          className={['debugger-block', `debugger-block-${this.props.store.debugger ? 'visible' : 'hidden'}`].join(' ')}
        >
          <div>
            Counter {this.props.store.count} <br />
            <button onClick={this.handleInc}> + </button>
            <button onClick={this.handleDec}> - </button>
            <p>{this.props.store.width} x {this.props.store.height}</p>
            <p>keyCode: {this.props.store.key}</p>
          </div>
        </div>
        {this.props.store.debugger && this.props.children}
      </React.Fragment>
    );
  }
}


const DebuggerObserver = observer(Debugger);

const DebuggerOut = () => <DebuggerObserver store={appStore} />;

export default DebuggerOut;
