import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

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
    <AppBar position="static" color="white" style={{boxShadow:"initial"}}>
      <Toolbar >
        <Typography variant="h6" color="inherit" className={classes.menuButton}>
          <Typography variant="h4" className="animated slideInDown">David</Typography >
        </Typography>
        <Typography variant="h6" color="inherit" className={classes.grow}></Typography> 
        <Button color="primary"><b>Projects</b></Button>
        <Button color="primary">Contacts</Button>
      </Toolbar>
    </AppBar>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ButtonAppBar)