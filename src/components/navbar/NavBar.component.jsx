import React, { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';
import styles from './navbar.module.css'

class NavBar extends Component {
  static contextType = ThemeContext;
  render(){
    return (
      <nav className={styles.navBar}>
        <a href={'https://github.com/mabenunez'} target={'blank'} className={styles.navBarUser}>{this.context.login}</a>
      </nav>
    )
  }
}
export default NavBar;