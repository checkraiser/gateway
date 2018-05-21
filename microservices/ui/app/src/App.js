import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    // const clusterName = process.env.REACT_APP_CLUSTER_NAME || 'NoClusterName';
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          Test 1
        </p>
      </div>
    );
  }
}

export default App;
