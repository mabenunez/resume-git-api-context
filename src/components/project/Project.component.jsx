import React, { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';

class Project extends Component {
  static contextType = ThemeContext;
  render(){
    return (
      <ul>
        {this.context}
      </ul>
    )
  }
}
export default Project;