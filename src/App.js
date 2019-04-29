// create your App component here
import React from 'react'

import AstronautList from './AstronautList'
const URL = 'http://api.open-notify.org/astros.json'
export default class App extends React.Component {

  state = {
    astronauts: []
  }

  componentDidMount(){
    fetch(URL)
      .then(resp => resp.json())
      .then(astronauts => {
        this.setState({astronauts: astronauts.people})
      })
  }
  render(){
    return (<div>
      <AstronautList astronauts={this.state.astronauts} />
      </div>)
  }
}
