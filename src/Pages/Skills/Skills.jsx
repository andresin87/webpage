import React from 'react';
import Button from '@atlaskit/button';


import devicon from 'devicon/devicon';

import Skill from '../../components/Skill/Skill';
import '../../styles/devicon.scss';
import './Skills.scss';

export default class Skills extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filters: [],
      activeFilters: [],
    };
    devicon.forEach(icon => {
      icon.tags.forEach((tag) => { this.state.filters.includes(tag) || this.state.filters.push(tag) });
    });
    
    this.renderFilters = this.renderFilters.bind(this);
    this.renderSkills = this.renderSkills.bind(this);
    this.renderStyles = this.renderStyles.bind(this);
    
    
  }
  
  renderFilters() {
    const { filters, activeFilters } = this.state;
    const addFilter = (filter) => {
      this.setState({ activeFilters: activeFilters.concat([filter]) });
    };
    const removeFilter = (filter) => {
      this.setState({ activeFilters: activeFilters.filter(activeFilter => activeFilter !== filter) });
    };
    const toogleFilter = (filter) => {
      activeFilters.includes(filter) ? removeFilter(filter) : addFilter(filter);
    };
    return filters.map((filter, index) => (
      <Button
        isSelected={activeFilters.includes(filter)}
        key={index}
        onClick={() => { toogleFilter(filter); }}>
        {filter}
      </Button>
    ));
  }
  
  renderSkills() {
    return (
      devicon.map((icon, index) => {
        return (
          <Skill
            key={index}
            name={icon.name}
            svgs={icon.versions.svg}
            tags={icon.tags}
          />
        );
      })
    );
  }
  
  renderStyles() {
    const { activeFilters } = this.state;
    let filterNames = activeFilters
      .map(activeFilter => `.tag-${activeFilter},`)
      .join(' ');
    
    if (filterNames) {
      filterNames = filterNames
        .substring(0, filterNames.length - 1)
        .concat([' { display: inherit !important; }']);
    } else {
      filterNames = '';
    }
    return (
      <style type="text/css" dangerouslySetInnerHTML={{ __html:filterNames }} />
    );
  }
  
  render() {
    return (
      <React.Fragment>
        {this.renderStyles()}
        <div className="filters-wrapper">
          {this.renderFilters()}
        </div>
        <div className="skills-wrapper">
          {this.renderSkills()}
        </div>
      </React.Fragment>
    );
  }
}
