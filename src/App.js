import React, { Component } from 'react';
import Welcome from './Welcome'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Welcome myname="Daniel"/>
      </div>
    );
  }
}

export default App;
