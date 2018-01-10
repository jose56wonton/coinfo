import React from "react";
import PropTypes from "prop-types";
import Grid from "material-ui/Grid/Grid";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import Paper from "material-ui/Paper";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  paper: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 1
  })
});
function CoinGraph(props) {
  const { classes, time, handleChange } = props;

  return (
    <Grid container spacing={24}>
      <Grid item xs={12}>
        <Paper className={classes.paper} elevation={4}>
          <form className={classes.container} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel htmlFor="age-simple">Age</InputLabel>
              <Select
                value={time}
                onChange={handleChange}
                input={<Input name="age" id="age-simple" />}
              >
                <MenuItem value="1DAY">24 Hours</MenuItem>
                <MenuItem value="7DAY">7 Days</MenuItem>
                <MenuItem value="1MTH">1 Month</MenuItem>
                <MenuItem value="1YRS">1 Year</MenuItem>
                <MenuItem value="5YRS">5 Year</MenuItem>
              </Select>
            </FormControl>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
}

CoinGraph.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CoinGraph);
