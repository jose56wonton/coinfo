import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Input, { InputLabel } from "material-ui/Input";
import { MenuItem } from "material-ui/Menu";
import { FormControl } from "material-ui/Form";
import Select from "material-ui/Select";
import Paper from "material-ui/Paper";
import Typography from 'material-ui/Typography';
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
    'align-items': 'center',
    display: 'flex',
    'justify-content': 'space-between',
    paddingTop: 16,
    paddingBottom: 16
  }),
  type:{
    display: 'inline'
  }
});
function CoinGraph(props) {
  const { classes, time, handleChange,coin } = props;

  return (
    <Paper className={classes.paper} elevation={4}>
      <Typography type="display1" className={classes.type} component="h5">
        {coin.name}
      </Typography>
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
            <MenuItem value="6MTH">6 Months</MenuItem>
            <MenuItem value="1YRS">1 Year</MenuItem>
          </Select>
        </FormControl>
      </form>
    </Paper>
  );
}

CoinGraph.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CoinGraph);
