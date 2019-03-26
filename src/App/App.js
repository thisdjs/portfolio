import React, { Component } from 'react';
import logo from './../logo.svg';
import './App.css';
import ButtonAppBar from "./Components/AppBar"

const body = {
  minHeight: "100vh",
  backgroundColor: '#282c34',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}

class App extends Component {

  render() {
    return (
      <div id="App" className="App">
        <ButtonAppBar></ButtonAppBar>
        <div 
         className="App-content" style={body}
        >
          <div className="centerElements">David</div>
        </div>
      </div>
    );
  }
}

export default App;
