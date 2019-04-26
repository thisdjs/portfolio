
import React from 'react'
import PropTypes from 'prop-types'
import { unstable_Box as Box } from '@material-ui/core/Box'
import { withStyles, createMuiTheme, withTheme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { IconButton, Badge } from '@material-ui/core';

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <AppBar position="static" color="secondary" style={{boxShadow:"initial"}} className="animated slideInDown">
      <Toolbar >
        <Typography variant="h4" color="inherit" className={classes.menuButton}>
          David
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.grow}></Typography> 
        <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
          <Button color="primary"><b>Projects</b></Button>
          {/* <Button color="primary">Contacts</Button> */}
          <Typography variant="h6"> | </Typography>
          <IconButton color="inherit">
            <span 
              onClick={() => window.open("https://www.geeksforgeeks.org")} className="fab fa-github" 
              style={{color:"#282c34", cursor: "pointer"}}>
            </span>
          </IconButton>
          <IconButton color="inherit">
            <span 
              onClick={() => console.log("clicked")} className="fab fa-linkedin" 
              style={{color:"#282c34", cursor: "pointer"}}>
            </span>
          </IconButton>
          <IconButton color="inherit">
            <span 
              onClick={() => console.log("clicked")} className="fab fa-skype" 
              style={{color:"#282c34", cursor: "pointer"}}>
            </span>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)

