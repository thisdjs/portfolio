import React, { Component } from 'react';
import './App.css';
import ButtonAppBar from "./Components/AppBar"
import { Grid, Typography } from '@material-ui/core';


class App extends Component {

  render() {
    return (
      <div id="App" className="App">
        {/* <ButtonAppBar></ButtonAppBar> */}
        <div className="App-header"> test </div>
        <div
          className="App-body"
        >
          <div className="content">
            <Grid container spacing={32}>
              <Grid item xs={12} sm={4}>
                <div class="profilePiContainer">
                  <img class="profilePic" height={"150px"} src="profilePic.jpg" alt="profile picture" ></img>
                </div>
              </Grid>
              <Grid item xs={12} sm={8}>
                <div class="texts">
                  <Typography variant="h5">Hello!! 👋</Typography>
                  <Typography variant="subtitle1"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </Typography>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
