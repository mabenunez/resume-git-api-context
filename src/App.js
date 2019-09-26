import React, { Component } from 'react';
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
    } catch {
      console.log('err')
    }
  }
  render(){
    return (
      <div>
        
      </div>
    )
  }
}
export default App;
