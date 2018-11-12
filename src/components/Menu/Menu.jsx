import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";

import RouteEnum from "../../enumerations/RouteEnum";
import MenuElement from "./MenuElement";

import './menu.scss';

export default class Menu extends PureComponent {
  constructor(props) {
    super(props);
    this.setBounds = this.setBounds.bind(this);
    this.state = {
      routes: RouteEnum.enumValues.filter(route => !route.hidden).map(route => ({ ...route, bounds: {} })),
      height: 0,
    }
  }
  setBounds(index, bounds) {
    const { routes } = this.state;
    const { height, width, x, y } = bounds;
    routes[index].bounds = { height, width, x, y };
    const svgHeight = Math.max(...(routes.map(route => route.bounds.height || 0)));
    const svgWidth = routes.slice(0, routes.length).map(value => value.bounds.width || 0).reduce((a = 0, b = 0) => a + b);
    this.setState({
      routes,
      height: svgHeight,
      width: svgWidth,
    });
  }
  render() {
    const { routes, height, width } = this.state;
    const letterMargins = 10;
    return (
      <React.Fragment>
        <svg height={height} width={width + (routes.length - 1) * letterMargins} id="menu">
          {routes.map((route, index)  => (
            <MenuElement
              {...route}
              y={route.bounds.height || 0}
              x={routes.slice(0, index + 1).map(value => value.bounds.width || 0).reduce((a = 0, b = 0) => a + b) - (route.bounds.width || 0) + (index * letterMargins)}
              onGettingBounds={(bounds) => { this.setBounds(index, bounds);}}
            />
          ))}
        </svg>
      </React.Fragment>
    );
  }
}