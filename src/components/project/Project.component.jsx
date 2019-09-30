import React, { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';

class Project extends Component {
  static contextType = ThemeContext;
  render(){
    return (
      <li>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <a href={this.props.url}>Check it out!</a>
      </li>
    )
  }
}
export default Project;