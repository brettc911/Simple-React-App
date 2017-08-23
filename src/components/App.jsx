import React, { Component } from 'react';
import '../styles/App.css';

// ==== COMPONENTS ==== //
import Earthquakelist from './Earthquakelist'
import Earthquakeinfo from './Earthquakeinfo'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">
          <div className="my-header">
            "Earthquakes!"
          </div>
        </div>
        <Earthquakeinfo />
        <Earthquakelist />
      </div>
    );
  }
}

export default App;
