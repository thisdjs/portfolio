import React, { Component } from 'react'
import './App.css'
import AppNavBar from "./Components/AppNavBar"
import { Grid, Typography, IconButton, Paper } from '@material-ui/core'
import BorderWrapper from 'react-border-wrapper'
import { FullPage, Slide } from 'react-full-page';
import StyledSection from './Components/StyledSection'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
})
class App extends Component { 

  
  render() {
    const {classes} = this.props

    return (
      <div id="App" className="App">

        <AppNavBar>

          <FullPage>
            <Slide>
              <StyledSection>
                <Grid container spacing={32} style={{margin:"0px"}}>
                    <Grid item xs={12} sm={4}>
                      <Grid item xs style={{textAlign:"center", /*padding:"10px"*/}}>
                        <img className="avatar" height={"150px"} src="profilePic.jpg" alt="profile" 
                          onClick={()=>speechSynthesis.speak(new SpeechSynthesisUtterance('I like coffe'))}>
                        </img>
                      </Grid>
                      <Grid item xs style={{textAlign:"center" /*, padding:"10px"*/}}>
                        <IconButton color="inherit"  onClick={() => window.open("https://github.com/thisdjs")}>
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
                        <IconButton color="inherit" onClick={() => console.log("clicked")}>
                          <span 
                            className="fab fa-gitlab" 
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
              </StyledSection>
            </Slide>
            
            <Slide style={{backgroundColor:"blue"}}>
              <StyledSection>
                <Grid container spacing={32} style={{margin:"0px"}}>
                  <h1>tecnologies</h1>
                  <img style={{height:"250px"}} 
                    src="https://images.unsplash.com/photo-1556596768-6d27210a5ee2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1489&q=80">
                  </img>
                </Grid>
                {/* <div class="LI-profile-badge"  
                  data-version="v1" 
                  data-size="medium" 
                  data-locale="en_US" 
                  data-type="horizontal" 
                  data-theme="dark" 
                  data-vanity="david-j-santos">                  
                  <a 
                    href='https://pt.linkedin.com/in/david-j-santos?trk=profile-badge'
                    target="_blank">
                      David Santos
                  </a>
                </div> */}
              </StyledSection>
            </Slide>
          </FullPage>

        </AppNavBar>
      </div>
    );
  }
}

export default App;


// const styles = (theme) => ({
//   toolbar: theme.mixins.toolbar,
// });

// const App = (props) => {
//   const { classes } = props;

//   return (
//     <div>
//       <AppBar color="primary" position="fixed">
//         <Toolbar>
//           <Typography color="inherit" type="title">
//             My Title
//           </Typography>
//         </Toolbar>
//       </AppBar>
//       <Paper>
//         <div className={classes.toolbar} />
//         MyContent will be shifted downwards by the div above. If you remove 
//         the div, your content will disappear under the app bar.
//       </Paper>
//     </div>
//   );
// }

// export default withStyles(styles)(App);