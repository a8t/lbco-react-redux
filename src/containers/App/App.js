import React, { Component } from 'react';
import { Route } from 'react-router-dom'

import LocationSearchPage from '../LocationSearchPage/LocationSearchPage';
import LocationDetailsPage from '../LocationDetailsPage/LocationDetailsPage';

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Route path="/" component={LocationSearchPage}/>
        <Route path="/details" component={LocationDetailsPage}/>
      </div>
    );
  }
}

export default App;
