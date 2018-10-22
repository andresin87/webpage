import React, { PureComponent } from 'react';
import { icons as icomoons } from 'devicon/icomoon';

import SGVSkillNameEnum from '../../enumerations/SVGSkillNameEnum';

export default class Page extends PureComponent {
  constructor(props) {
    super(props);
    const getIcomoon = (icomoonName) => {
      return icomoons.find(icomoon => icomoon.properties.name === icomoonName);
    };
    const getIconName = (svgs) => {
      return SGVSkillNameEnum.enumValues
        .map(SGVSkillName => ({ value: SGVSkillName.value, weight: SGVSkillName.weight }))
        .sort((a, b) => a.weight < b.weight)
        .find(SGVSkillName => svgs.includes(SGVSkillName.value)).value;
    };
    const iconName = getIconName(props.svgs);
    this.state = {
      iconName,
      icomoon: getIcomoon(`${props.name}-${iconName}`),
    }
  }
  render () {
    const { name, tags } = this.props;
    const { iconName, icomoon } = this.state;
    const classNames = tags.map(tag => `tag-${tag}`)
      .concat([
        `icon-${name}`,
        `icon-id-${icomoon.properties.id}`,
        `icon-code-${icomoon.properties.code}`,
      ]).join(' ');
    return (
      <svg style={{ width: 120, height: 120, display: 'none' }} alt={name} className={classNames} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
        <path className={`devicon-${name}-${iconName} colored`} d={icomoon.icon.paths.join(' ')}/>
      </svg>
    );
  }
}