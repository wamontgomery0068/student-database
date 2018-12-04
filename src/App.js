import React, { Component } from 'react';
import NavBar from './Components/NavBar/NavBar';
import MainComponent from './Components/MainContent/MainContent';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <MainComponent />
      </div>
    );
  }
}

export default App;