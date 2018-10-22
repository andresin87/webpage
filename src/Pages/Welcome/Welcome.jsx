import React from 'react';
import { FormattedMessage } from 'react-intl';
import { observer } from 'mobx-react/index';

import FlowType from '../../components/FlowType/FlowType';

import './welcome.scss';
import appStore from "../../storage/store";

const WelcomeCmp = (props) =>  {
  return (
    <React.Fragment>
      <section>
        <div className="hi-title">
          <FormattedMessage id="welcome.hi"/>
          <p>debugger: {props.store.debugger.toString()}</p>
        </div>
      </section>
    </React.Fragment>
  );
};

const WelcomeObserver = observer(WelcomeCmp);

const Welcome = () => <WelcomeObserver store={appStore} />;

export default Welcome;