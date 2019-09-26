import React, { Component } from 'react';
import ThemeContext from '../../context/ThemeContext';
import NavBar from '../navbar/NavBar.component';
import styles from './header.module.css';

class Header extends Component {
  static contextType = ThemeContext;
  render(){
    return (
      <header>
        <NavBar/>
        <section className={styles.headerProfile}>
          <div className={styles.ProfilePicCont}>
            <img src={this.context.avatar_url}></img>
          </div>
          <p>{this.context.bio}</p>
        </section>
      </header>
    )
  }
}
export default Header;
