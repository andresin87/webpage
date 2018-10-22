import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Page from './Page';

export default function PageDecorator(ComposedComponent, props, store) {
  class WrapperComponent extends Component {
    render() {
      debugger;
      return (
        <Page className={props.className} title={props.title}>
          <ComposedComponent {...store} />
        </Page>
      );
    }
  }
  WrapperComponent.propTypes = {
    title: PropTypes.string,
    className: PropTypes.string,
  };
  WrapperComponent.defaultProps = {
    title: '',
    className: '',
  };
  return WrapperComponent;
};
