import React  from 'react';
import { Enum } from 'enumify';
import HomeCircleIcon from '@atlaskit/icon/glyph/home-circle';

class RouteEnum extends Enum {
  toJSON() {
    return this.value;
  }
}

RouteEnum.initEnum({
  ABOUT: {
    value: 'ABOUT',
    className: 'about-page',
    path: '/about',
    literalKey: 'enumerations.route-enum.ABOUT',
    hidden: false,
    icon: null,
  },
  BASE: {
    value: 'BASE',
    className: 'base-page',
    path: '/',
    literalKey: 'enumerations.route-enum.BASE',
    hidden: true,
    icon: null,
  },
  CONTACT: {
    value: 'CONTACT',
    className: 'contact-page',
    path: '/contact',
    literalKey: 'enumerations.route-enum.CONTACT',
    hidden: false,
    icon: null,
  },
  HOBBIES: {
    value: 'HOBBIES',
    className: 'hobbies-page',
    path: '/hobbies',
    literalKey: 'enumerations.route-enum.HOBBIES',
    hidden: false,
    icon: null,
  },
  HOME: {
    value: 'HOME',
    className: 'home-page',
    path: '/home',
    literalKey: 'enumerations.route-enum.HOME',
    hidden: true,
    icon: <HomeCircleIcon />
  },
  NOT_FOUND: {
    value: 'NOT_FOUND',
    className: 'not-found-page',
    path: '/404',
    literalKey: 'enumerations.route-enum.NOT_FOUND',
    hidden: true,
    icon: null,
  },
  PORTFOLIO: {
    value: 'PORTFOLIO',
    className: 'portfolio-page',
    path: '/portfolio',
    literalKey: 'enumerations.route-enum.PORTFOLIO',
    hidden: false,
    icon: null,
  },
  PROJECTS: {
    value: 'PROJECTS',
    className: 'projects-page',
    path: '/projects',
    literalKey: 'enumerations.route-enum.PROJECTS',
    hidden: false,
    icon: null,
  },
  SKILLS: {
    value: 'SKILLS',
    className: 'skills-page',
    path: '/skills',
    literalKey: 'enumerations.route-enum.SKILLS',
    hidden: false,
    icon: null,
  },
  WELCOME: {
    value: 'WELCOME',
    className: 'welcome-page',
    path: '/welcome',
    literalKey: 'enumerations.route-enum.WELCOME',
    hidden: true,
    icon: null,
  },
});

export default RouteEnum;
