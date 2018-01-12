import React from "react";
import NavContainer from "../containers/general/nav_container";
import CoinTableContainer from "../containers/index/coin_table_container";
import withStyles from "material-ui/styles/withStyles";

const styles = nice => ({
  container: {
    margin: "0 auto",
    maxWidth: 1100
  }
});

function Index(props) {
  const { classes } = props;
  return (
    <div>
      <NavContainer />
      <div className={classes.container}>
        <CoinTableContainer />
      </div>
    </div>
  );
}

export default withStyles(styles)(Index);
