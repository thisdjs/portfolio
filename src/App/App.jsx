import React, { Component } from 'react'
import './App.css'
import ButtonAppBar from "./Components/AppBar"
import { Grid, Typography } from '@material-ui/core'
import BorderWrapper from 'react-border-wrapper'

class App extends Component {

  render() {
    const profilePic = <img className="profilePic" height={"150px"} src="profilePic.jpg" alt="profile" ></img>

    return (
      <div id="App" className="App">
        <ButtonAppBar></ButtonAppBar>
        {/* <div className="App-header"> test </div> */}
        <div className="App-body">
          <div className="content">
          {/* <BorderWrapper borderWidth="2px" borderColour="#22C5EE" borderType="outset" leftGap="-5px" leftOffset="75px" leftElement={profilePic}> */}
            <Grid container spacing={32}>
              <Grid item container>
                <Grid item xs={12} sm={4}>
                  <Grid item xs style={{textAlign:"center", padding:"10px"}}>
                    <img className="profilePic" height={"150px"} src="profilePic.jpg" alt="profile" ></img>
                  </Grid>
                </Grid>
                  <Grid item xs={12} sm={8}>
                    <div className="texts">
                    <BorderWrapper borderWidth="2px" borderColour="#22C5EE" borderType="outset">
                      <Typography variant="h5">Hello!! 👋</Typography>
                      <Typography variant="subtitle1"> 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      </Typography>
                    </BorderWrapper>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          {/* </BorderWrapper> */}
          </div>
        </div>
      </div>
    );
  }
}

export default (App);
