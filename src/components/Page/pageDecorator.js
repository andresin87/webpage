import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import StorageTypeEnum from '../../enumerations/StorageTypeEnum';
import RouteEnum from '../../enumerations/RouteEnum';

import Page from './Page';

export default function PageDecorator(ComposedComponent, props, store) {
  class WrapperComponent extends Component {
    constructor(props) {
      super(props);
      const visitor_name = window.storage.get(StorageTypeEnum.LOCALSTORAGE.value, 'visitor_name');
      if (!visitor_name || visitor_name === '') {
        this.props.history.push(RouteEnum.WELCOME.path);
      }
    }
    render() {
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
  return withRouter(WrapperComponent);
};
