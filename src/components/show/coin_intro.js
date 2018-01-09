import React from "react";
import PropTypes from "prop-types";
import PaperTile from "../general/paper_tile";
import Grid from "material-ui/Grid/Grid";
import { withStyles } from "material-ui/styles";
const styles = theme => ({  
  thing: {
    
  }
});

function CoinInfo(props) {
  const { classes } = props;
  if(!props.coin[0])
    return null;
  const coin = props.coin[0];
  return (
      <Grid container spacing={24}>
        <Grid item xs={12} sm={4}>
          <PaperTile title={coin.name} para="" />
        </Grid>        
      </Grid>
  );
}

CoinInfo.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CoinInfo);
