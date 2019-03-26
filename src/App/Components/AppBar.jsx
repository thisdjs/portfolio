import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
}

const background = {
  backgroundColor: '#282c34'
}

function ButtonAppBar(props) {
  const { classes } = props
  return (
    <div style={background} className={classes.root}>
      <AppBar position="static">
        <Toolbar >
          {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" color="inherit" className={classes.grow}></Typography> 
          <Button color="secondary">Projects</Button>
          <Button color="secondary">DevNotes</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)