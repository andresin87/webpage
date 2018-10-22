import React, { Component } from 'react';
import PropTypes from 'prop-types';
import flowtype from 'flowtype-js';

import './FlowType.scss';

class FlowType extends Component {
  constructor(props) {
    super(props);
    this.flowType = React.createRef();
  }
  
  componentDidMount() {
    const { options } = this.props;
    const { flowType } = this;
    flowtype(flowType.current, options);
  }
  
  render() {
    const { text } = this.props;
    const { flowType } = this;
    return (
      <div
        className="flowtype-block"
        ref={flowType}
      >
        {text}
      </div>
    );
  }
}

FlowType.propTypes = {
  text: PropTypes.string,
  options: PropTypes.shape({
    minimum: PropTypes.number,
    maximum: PropTypes.number,
    minFont: PropTypes.number,
    maxFont: PropTypes.number,
    fontRatio: PropTypes.number,
  }).isRequired,
};

export default FlowType;