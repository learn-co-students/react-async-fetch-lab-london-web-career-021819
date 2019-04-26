import React from 'react'

class App extends React.Component {
  state = {
    astronauts: []
  }

  componentDidMount () {
    fetch('http://api.open-notify.org/astros.json')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          astronauts: data
        })
      })
  }

  render () {
    return <h1>Yo</h1>
  }
}

export default App