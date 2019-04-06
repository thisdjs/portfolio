import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from "./Components/AppBar"


class App extends Component {

  render() {
    return (
      <div id="App" className="App">
        {/* <ButtonAppBar></ButtonAppBar> */}
        <div className="App-header"> test </div>
        <div
          className="App-body"
        >
          <div className="centerElements">
            <p>David</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
