import React, { Component } from 'react';
import debounce from 'lodash/debounce';

import './Input.scss';

class Input extends Component {
  constructor(props) {
    super(props);
    this.keyPressHandler = this.keyPressHandler.bind(this);
    this.setValue = (value) => {
      let update = false;
      if (this.value !== value) {
        if (this.value !== '' &&  value === '') {
          update = true;
        } else if (this.value === '' &&  value !== '') {
          update = true;
        }
        this.value = value;
      }
      if(update) {
        this.forceUpdate();
      }
      
    };
    this.setDebouncedValue = debounce((value) => {
        this.setValue(value);
      }, 250);
    this.value = '';
  }
  
  keyPressHandler(event) {
    debugger;
    const value = this.input.value;
    this.setDebouncedValue(value);
  }
  render() {
    return (
      <div className="hi-input-wrapper">
        <input
          onKeyPress={this.keyPressHandler}
          placeholder="What's your name?"
          ref={(element) => { this.input = element; }}
          className="hi-input"
          onKeyUp={this.keyPressHandler}
        />
        <hr />
        <div className="hi-input-info">
          <div className="hi-input-info-container">
            <div className={`hi-input-skip ${this.value === '' ? 'on' : 'off'}`}>skip →</div>
            <div className={`hi-input-enter ${this.value !== '' ? 'on' : 'off'}`}>enter →</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Input;