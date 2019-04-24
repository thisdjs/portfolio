import React, { Component } from 'react'
import './App.css'
import ButtonAppBar from "./Components/AppBar"
import { Grid, Typography, Card } from '@material-ui/core'

class App extends Component {

  render() {
    return (
      <div id="App" className="App">
        <ButtonAppBar></ButtonAppBar>
        {/* <div className="App-header"> test </div> */}
        <div
          className="App-body"
        >
          <div className="content">
            <Grid container spacing={32}>
              <Grid item container>
                <Grid item xs={12} sm={4}>
                  <Grid item xs style={{textAlign:"center"}}>
                    <img className="profilePic" height={"150px"} src="profilePic.jpg" alt="profile" ></img>
                  </Grid>
                  <p/>
                  <Grid item container xs alignItems="baseline" style={{textAlign:"center"}}>
                    <Grid item xs >
                        <span onClick={() => console.log("clicked")} className="fab fa-github" style={{fontSize:"25px", color:"#282c34"}}></span>
                    </Grid>
                    <Grid item xs>
                        <span onClick={() => console.log("clicked")} className="fab fa-linkedin" style={{fontSize:"25px", color:"#282c34"}}></span>
                    </Grid>
                  </Grid>
                </Grid>
                  <Grid item xs={12} sm={8}>
                    <div className="texts">
                      <Typography variant="h5">Hello!! 👋</Typography>
                      <Typography variant="subtitle1"> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </div>
                  </Grid>
              </Grid>
            </Grid>              
          </div>
        </div>
      </div>
    );
  }
}

export default App;
