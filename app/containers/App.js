// @flow
import React, { Component } from 'react';
import type { Children } from 'react';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SettingsIcon from 'material-ui-icons/Settings';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  flex: {
    flex: 1,
  },
});

class App extends Component {
  props: {
    children: Children
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              Holy Alliance
            </Typography>
            <Button color="contrast">My Flight Plan</Button>
            <Button color="contrast">My Alliance</Button>
            <IconButton color="contrast" aria-label="Settings">
              <SettingsIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        {this.props.children}
      </div>
    );
  }
}

export default withStyles(styles)(App);