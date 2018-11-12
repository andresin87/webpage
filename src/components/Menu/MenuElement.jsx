import React, { PureComponent } from 'react';
import { withRouter } from "react-router-dom";
import { injectIntl } from 'react-intl';
import { Link } from "react-router-dom";
import * as d3 from 'd3';
import defer from 'lodash/defer';

// value: 'ABOUT',
// className: 'about-page',
// path: '/about',
// literalKey: 'enumerations.route-enum.ABOUT',
// hidden: false,
// icon: null,

class MenuElement extends PureComponent {
  constructor(props) {
    super(props);
    this.menuElement = React.createRef();
  }
  componentDidMount() {
    this.forceUpdate();
  }
  componentDidUpdate() {
    const { className } = this.props;
    const bounds = d3.select(`#menu > .${className}`).node().getBBox();
    this.props.onGettingBounds(bounds);
    defer(() => {
      const bounds = d3.select(`#menu > .${className}`).node().getBBox();
      this.props.onGettingBounds(bounds);
    });
  }
  render() {
    const { literalKey, intl, className, x, y, path, history } = this.props;
    return (
      <text x={x} y={y} ref={this.menuElement} className={className} onClick={() => { history.push(path); }}>
        {intl.formatMessage({id: literalKey}).toUpperCase()}
      </text>
    );
  }
}

export default injectIntl(withRouter(MenuElement));
