import React from "react";
import PaperTile from "../general/paper_tile";
import Grid from "material-ui/Grid/Grid";

function CoinInfo(props) {
  const coin = props.coin[0];
  if(!coin) return null;  
  return (
      <Grid  container spacing={24} className="margin-top">
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.rank}  title="Rank: " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.price_usd} title="USD Conversion: " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.market_cap_usd} title="Market Cap: " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin['24h_volume_usd']}   title="24h Volume " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.available_supply}  title="Circulating Supply: " />
        </Grid>
        <Grid item xs={12} sm={4}>
          <PaperTile para={coin.total_supply}  title="Total Supply: " />
        </Grid>
      </Grid>
  );
}

export default CoinInfo;
