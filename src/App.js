// create your App component here

import React, { Component } from 'react'


class App extends Component {

  fetchfromAPI() {
    return fetch('http://api.open-notify.org/astros.json')
    .then(data => data.json())
  }

  componentDidMount() {
    this.fetchfromAPI()
  }

  render() {
    return (
      <App />
    )

  }
}


export default App
