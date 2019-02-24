import React, { Component, Fragment } from 'react';
import logo from './../logo.svg';
import './App.css';
import ButtonAppBar from "./Components/AppBar"

const testStyle = {
  // position:'absolute',
  minHeight: "100vh",
  backgroundColor: '#282c34',
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <ButtonAppBar></ButtonAppBar>
        <div 
        // className="App-header"
        >
          <div style={testStyle}>David</div>
        </div>
      </div>
    );
  }
}

export default App;
