import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Paper from "material-ui/Paper";
import Typography from 'material-ui/Typography';
const styles = theme => ({  
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16
  }),
  type:{
    display: 'inline'
  }
});
function CoinGraph(props) {
  const { classes,coin } = props;

  return (
    <Paper className={classes.paper} elevation={4}>
      <Typography type="display1" className={classes.type} component="h5">
        {coin.name}
      </Typography>      
    </Paper>
  );
}

CoinGraph.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CoinGraph);
