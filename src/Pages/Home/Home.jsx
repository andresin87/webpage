import React, {PureComponent} from 'react';
import { FormattedMessage } from 'react-intl';
import settings from "../../settings/index";

export default class Home extends PureComponent {
  constructor(props) {
    super(props);
    debugger;
    this.state = {
      name: 'Eric',
      unreadCount: 1000,
    };
  }
  
  render() {
    const { name, unreadCount } = this.state;
    const { className, children } = this.props;
    const classes = className || '';
    return (
      <div className={['page'].join(classes).split(' ')}>
        <p>
          <FormattedMessage
            id="default-message"
            values={{name: <b>{name}</b>, unreadCount}}
          />
        </p>
        <p>
          {settings.profile}
        </p>
        {children}
      </div>
    );
  }
}
