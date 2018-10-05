import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

import RouteEnum from './enumerations/RouteEnum';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Hobbies from './Pages/Hoobies/Hobbies';
import Skills from './Pages/Skills/Skills';
import NotFound from './Pages/NotFound/NotFound';

export default () => (
  <Router>
    <Switch>
      <Route exact path={RouteEnum.BASE} render={() => <Redirect to="/home" />} />
      <Route exact path={RouteEnum.HOME} component={Home} />
      <Route exact path={RouteEnum.ABOUT} component={About} />
      <Route exact path={RouteEnum.CONTACT} component={Contact} />
      <Route exact path={RouteEnum.HOBBIES} component={Hobbies} />
      <Route exact path={RouteEnum.SKILLS} component={Skills} />
      <Route render={() => <NotFound />} />
    </Switch>
  </Router>
);