import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { configure } from 'mobx';

import pageDecorator from './components/Page/pageDecorator';

import Debugger from './components/Debugger/Debugger';

import RouteEnum from './enumerations/RouteEnum';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Hobbies from './Pages/Hoobies/Hobbies';
import Portfolio from './Pages/Portfolio/Portfolio';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import Welcome from './Pages/Welcome/Welcome';
import NotFound from './Pages/NotFound/NotFound';

configure({ enforceActions: 'observed' });

const routePageDecoratorProps = (routeEnum) => ({
  title: routeEnum.literalKey,
  className: routeEnum.className,
});

class Router extends React.Component {
  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path={RouteEnum.BASE.path} render={() => <Redirect to={RouteEnum.WELCOME.path} />} />
            <Route exact path={RouteEnum.HOME.path} component={pageDecorator(Home, routePageDecoratorProps(RouteEnum.HOME))} />
            <Route exact path={RouteEnum.ABOUT.path} component={pageDecorator(About, routePageDecoratorProps(RouteEnum.ABOUT))} />
            <Route exact path={RouteEnum.CONTACT.path} component={pageDecorator(Contact, routePageDecoratorProps(RouteEnum.CONTACT))} />
            <Route exact path={RouteEnum.HOBBIES.path} component={pageDecorator(Hobbies, routePageDecoratorProps(RouteEnum.HOBBIES))} />
            <Route exact path={RouteEnum.PORTFOLIO.path} component={pageDecorator(Portfolio, routePageDecoratorProps(RouteEnum.PORTFOLIO))} />
            <Route exact path={RouteEnum.PROJECTS.path} component={pageDecorator(Projects, routePageDecoratorProps(RouteEnum.PROJECTS))} />
            <Route exact path={RouteEnum.SKILLS.path} component={pageDecorator(Skills, routePageDecoratorProps(RouteEnum.SKILLS))} />
            <Route exact path={RouteEnum.WELCOME.path} render={() => <Welcome />} />
            <Route render={() => pageDecorator(NotFound(), routePageDecoratorProps(RouteEnum.NOT_FOUND))} />
          </Switch>
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default Router;