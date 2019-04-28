import React, { Component } from "react";
// create your App component here
URL = "http://api.open-notify.org/astros.json";

class App extends Component {
  state = {
    astrosInSpace: []
  };

  componentDidMount(){
    fetch(URL)
      .then(response => response.json())
      .then(json => this.setState({ astrosInSpace: json.people }));
  };
  render() {
    return (
      <div>
        <h2>
          There are {this.state.astrosInSpace.length} astronauts in space RIGHT
          NOW
        </h2>
        <ul>
          {this.state.astrosInSpace.map(astro => (
            <li>{astro.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
