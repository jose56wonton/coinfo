import React, { Component } from "react";
import NavContainer from "../containers/general/nav_container";
import CoinInfoContainer from "../containers/show/coin_info_container";
import CoinGraphContainer from "../containers/show/coin_graph_container";
import withStyles from "material-ui/styles/withStyles";
const styles = theme => ({  
  thing: {
    margin: "0 auto",
    maxWidth: 1100
  }
});
function Show (props) {
  const { classes } = props;
  return(
      <div>
        <NavContainer />
        <div className={classes.thing}>
          <CoinGraphContainer params={props.match} />
          <CoinInfoContainer params={props.match} />
        </div>
      </div>
    
  );
}

export default withStyles(styles)(Show);
