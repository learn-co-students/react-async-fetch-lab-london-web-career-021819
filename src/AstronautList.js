import React from 'react'

import Astronaut from './Astronaut.js'

export default class AstronautList extends React.Component {

  render(){
    const {astronauts} = this.props
    return (<div>{astronauts.map(astronaut => <Astronaut astronaut={astronaut} key={astronaut.name}/>)}</div>)
  }
}
