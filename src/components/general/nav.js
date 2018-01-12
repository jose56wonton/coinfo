import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import AppBar from "material-ui/AppBar";
import Toolbar from "material-ui/Toolbar";
import Typography from "material-ui/Typography";
import TextField from "material-ui/TextField";
import Loading from './loading';
// #F44336
const styles = theme => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    width: "100%"
  },
  flex: {
    flex: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

function Nav(props) {
  const { classes, handleClick,fetching } = props;
  console.log(fetching);
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            style={{ cursor: "pointer" }}
            onClick={() => handleClick()}
            type="title"
            color="inherit"
            className={classes.flex}
          >
            CoInfo
          </Typography>
          <TextField className={classes.textField} margin="normal" />
        </Toolbar>
      </AppBar>
      {(fetching.coin === true || fetching.history === true) ? <Loading/> : null}
      
    </div>
  );
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Nav);
