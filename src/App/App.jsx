import React, { Component } from 'react'
import './App.css'
import ButtonAppBar from "./Components/AppBar"
import { Grid, Typography, IconButton } from '@material-ui/core'
import BorderWrapper from 'react-border-wrapper'

class App extends Component {

  render() {
    return (
      <div id="App" className="App">
          <ButtonAppBar>
        <div className="first-section">
          {/* <div className="App-header"> test </div> */}
          <div className="App-body">
            <div className="content">
            {/* <BorderWrapper borderWidth="2px" borderColour="#22C5EE" borderType="outset" leftGap="-5px" leftOffset="75px" leftElement={profilePic}> */}
              <Grid container spacing={32}>
                <Grid item container>
                  <Grid item xs={12} sm={4}>
                    <Grid item xs style={{textAlign:"center", padding:"10px"}}>
                      <img className="profilePic" height={"150px"} src="profilePic.jpg" alt="profile" 
                        onClick={()=>speechSynthesis.speak(new SpeechSynthesisUtterance('hey, i\'m a robot'))}>
                      </img>
                    </Grid>
                    <Grid item xs style={{textAlign:"center", padding:"10px"}}>
                      <IconButton color="inherit"  onClick={() => window.open("https://github.com/thisdjs")} >
                        <span 
                          className="fab fa-github" 
                          style={{color:"#282c34", cursor: "pointer"}}>
                        </span>
                      </IconButton>
                      <IconButton color="inherit" onClick={() => console.log("clicked")}>
                        <span 
                          className="fab fa-linkedin" 
                          style={{color:"#282c34", cursor: "pointer"}}>
                        </span>
                      </IconButton>
                      <IconButton color="inherit" onClick={() => console.log("clicked")}>
                        <span 
                          className="fab fa-skype" 
                          style={{color:"#282c34", cursor: "pointer"}}>
                        </span>
                      </IconButton>
                    </Grid>
                  </Grid>
                    <Grid item xs={12} sm={8}>
                      <div className="texts">
                      <BorderWrapper borderWidth="2px" borderColour="#22C5EE" borderType="outset">
                        <Typography variant="h5">Hello!! 👋</Typography>
                        <hr/>
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
            </div>
          {/* </BorderWrapper> */}
          </div>
        </div>
        </ButtonAppBar>
        <p>test</p>
      </div>
    );
  }
}

export default (App);
