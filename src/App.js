import React, { Component } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/header/Header.component';
import Projects from './components/projects/Projects.component';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      github : []
    }
  }
  async componentDidMount() {
    try {
      const data = await fetch('https://api.github.com/users/mabenunez')
      const parsedData = await data.json()
      console.log(parsedData)
      this.setState({
        github : parsedData
      })
    } catch(err) {
      console.log(err)
    }
  }
  render(){
    return (
      <ThemeProvider value={this.state.github}>

        <div>
          <Header></Header>
        </div>
      </ThemeProvider>
    )
  }
}
export default App;
