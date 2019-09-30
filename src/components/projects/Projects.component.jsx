import React, { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';

class Projects extends Component {
  render(){
    return (
      <ul>
        {this.context.repos.map(() => {
          return (
            <Project
              
            />
          )
        })}
      </ul>
    )
  }
}
export default Projects;