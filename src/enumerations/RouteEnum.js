import { Enum } from 'enumify';

class RouteEnum extends Enum {
  toJSON() {
    return this.value;
  }
}

RouteEnum.initEnum({
  ABOUT: {
    value: 'ABOUT',
    path: '/about',
    literalKey: 'enumerations.route-enum.ABOUT',
  },
  BASE: {
    value: 'BASE',
    path: '/',
    literalKey: 'enumerations.route-enum',
  },
  CONTACT: {
    value: 'CONTACT',
    path: '/contact',
    literalKey: 'enumerations.route-enum.CONTACT',
  },
  HOBBIES: {
    value: 'HOBBIES',
    path: '/hobbies',
    literalKey: 'enumerations.route-enum.HOBBIES',
  },
  HOME: {
    value: 'HOME',
    path: '/home',
    literalKey: 'enumerations.route-enum.HOME',
  },
  NOT_FOUND: {
    value: 'SKILLS',
    path: '/projects',
    literalKey: 'enumerations.route-enum.NOT_FOUND',
  },
  PORTFOLIO: {
    value: 'PORTFOLIO',
    path: '/portfolio',
    literalKey: 'enumerations.route-enum.PORTFOLIO',
  },
  PROJECTS: {
    value: 'PROJECTS',
    path: '/projects',
    literalKey: 'enumerations.route-enum.PROJECTS',
  },
  SKILLS: {
    value: 'SKILLS',
    path: '/projects',
    literalKey: 'enumerations.route-enum.SKILLS',
  },
});

export default RouteEnum;
