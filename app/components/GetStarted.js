// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom'; // $FlowFixMe
import { withStyles } from 'material-ui/styles'; // $FlowFixMe
import Grid from 'material-ui/Grid';
import CheckboxIcon from 'material-ui-icons/CheckBox'; // $FlowFixMe
import Button from 'material-ui/Button'; // $FlowFixMe
import Typography from 'material-ui/Typography'; // $FlowFixMe
import List, { ListItem, ListItemIcon, ListItemText, } from 'material-ui/List';

const styles = () => ({
  root: {
    display: 'table',
    position: 'absolute',
    height: '80%',
    width: '100%',
  },
  panel: {
    display: 'table-cell',
    verticalAlign: 'middle',
    textAlign: 'center',
  },
  banner: {
    color: 'orange',
  },
  list: {
    textAlign: 'left',
    margin: 'auto',
    maxWidth: 450,
  }
});

class GetStarted extends Component {
  // Declare flow types of props
  props: {
    classes: {[string]: string},
    startClick: () => void
  };

  render() {
    const { classes, startClick } = this.props;
    return (
      <Grid className={classes.root}>
        <Grid container className={classes.panel}>
          <Grid item xs="12">
            <Typography className={classes.banner} type="display4" color="accent">Get Started</Typography>
            <Link className={classes.link} to="/new-alliance">
              <Typography type="display2">Create your flight plan</Typography>
            </Link>
          </Grid>
          <Grid item xs="12">
            <List className={classes.list}>
              <ListItem>
                <ListItemIcon><CheckboxIcon /></ListItemIcon>
                <ListItemText primary="Choose the holy soul" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckboxIcon /></ListItemIcon>
                <ListItemText primary="Choose a Saint, Blessed or Venerable" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckboxIcon /></ListItemIcon>
                <ListItemText primary="Choose a plenary indulgence" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckboxIcon /></ListItemIcon>
                <ListItemText primary="Complete requirements of plenary indulgence" />
              </ListItem>
              <ListItem>
                <ListItemIcon><CheckboxIcon /></ListItemIcon>
                <ListItemText primary="Pre-flight check to add to your Holy Alliance" />
              </ListItem>
            </List>
            <Button raised color="primary" onClick={startClick}>
              <Typography color="inherit">Start your flight plan</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default withStyles(styles)(GetStarted);
