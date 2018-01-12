import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    'margin-top': 0,
    paddingTop: 16,
    paddingBottom: 16
  }),
  type:{
    display: 'inline'
  }
});

function PaperTile(props) {
  const { classes,title,para } = props;
  return (
      <Paper className={classes.root} elevation={4}>
        <Typography type="title" className={classes.type} component="h5">
          {title}
        </Typography>
        <Typography type="subheading" className={classes.type} component="h5">
          {para}
        </Typography>
      </Paper>
  );
}

PaperTile.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperTile);