import React, { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Link } from "react-router-dom";

import RouteEnum from "../../enumerations/RouteEnum";

export default class Menu extends PureComponent {
  render() {
    return (
      <ul className="menu">
        {RouteEnum.enumValues
          .filter(route => !route.hidden)
          .map((route, index) => (
            <li key={index}>
              <Link to={route.path}>
                {route.icon}
                <FormattedMessage id={route.literalKey}/>
              </Link>
            </li>
        ))}
      </ul>
    );
  }
}