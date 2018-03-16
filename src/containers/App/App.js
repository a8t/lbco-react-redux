import React, { Component } from 'react';
import './App.css';
import LocationSearchContainer from 'containers/LocationSearchContainer/LocationSearchContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationSearchContainer/>
      </div>
    );
  }
}

export default App;
