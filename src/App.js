import React, { Component } from 'react'

export default class App extends Component {

  state = {
    astronauts: []
    }

componentDidMount () {
  fetch('http://api.open-notify.org/astros.json')
    .then(resp => resp.json())
    .then(astronauts => {
      this.setState({
        astronauts: astronauts })
} ) }

render () {
  return <h1> Hello </h1>
}

}
