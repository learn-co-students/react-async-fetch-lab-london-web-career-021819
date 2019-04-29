import React from 'react'

export default class Astronaut extends React.Component {

    render(){
      const {astronaut} = this.props
    return (
      <div>
        <p>
          <strong>Astronaut Name: </strong>
          {astronaut.name}
        </p>
        <p>
          <strong>Craft: </strong>
          {astronaut.craft}
        </p>
      </div>)
  }
}
