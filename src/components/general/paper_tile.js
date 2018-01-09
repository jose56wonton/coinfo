import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 1,
  }),
});

function PaperTile(props) {
  const { classes,title,para } = props;
  return (
    <div>
      <Paper className={classes.root} elevation={4}>
        <Typography type="headline" component="h3">
          {title}
        </Typography>
        
        <Typography component="p">
          {para}
        </Typography>
      </Paper>
    </div>
  );
}

PaperTile.propTypes = {
  classes: PropTypes.object.isRequired,

};

export default withStyles(styles)(PaperTile);