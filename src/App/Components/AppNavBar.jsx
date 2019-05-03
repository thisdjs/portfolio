
import React from 'react'
import PropTypes from 'prop-types'
import { unstable_Box as Box } from '@material-ui/core/Box'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { IconButton } from '@material-ui/core'

const styles = {
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 20,
  },
}

function AppNavBar(props) {
  const { classes, children } = props

  return (
    <AppBar position="fixed" color="secondary"
      style={{boxShadow:"initial"}} 
      className="animated slideInDown delay-1s">
      <Toolbar >
        <Typography variant="h4" color="inherit" className={`${classes.menuButton}`} style={{cursor: "pointer"}}>
          DS
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.grow}></Typography> 
        <Box >
          <Button color="primary"><b>Projects</b></Button>
          {/* <Button color="primary">Contacts</Button> */}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

AppNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(AppNavBar)

