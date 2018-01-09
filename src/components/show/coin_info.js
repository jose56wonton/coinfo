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
          <PaperTile para={coin.rank} title="Rank: " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.price_usd} title="USD Conversion: " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.market_cap_usd} title="Market Cap: " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin['24h_volume_usd']} title="24h Volume " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.available_supply} title="Circulating Supply: " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.total_supply} title="Total Supply: " />
        </Grid>
      </Grid>
  );
}

CoinInfo.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withStyles(styles)(CoinInfo);
