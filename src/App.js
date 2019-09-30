import React, { Component } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/header/Header.component';
import Projects from './components/projects/Projects.component';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      github : [],
      repos : []
    }
  }
  async componentDidMount() {
    try {
      const userData = await fetch('https://api.github.com/users/mabenunez')
      const parsedUserData = await userData.json()

      const reposData = await fetch('https://api.github.com/users/mabenunez/repos')
      const parsedReposData = await reposData.json()
      console.log(parsedReposData)
      this.setState({
        github : parsedUserData,
        repos : parsedReposData
      })
    } catch(err) {
      console.log(err)
    }
  }
  render(){
    return (
      <ThemeProvider value={this.state.github, this.state.repos}>
        <div>
          <Header></Header>
        </div>
      </ThemeProvider>
    )
  }
}
export default App;
