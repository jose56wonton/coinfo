import React from "react";
import { TableCell, TableRow } from "material-ui/Table";

function CoinTableRow(props) {
  const { coin, handleClick } = props;

  return (
    <TableRow
      hover
      onClick={() => handleClick(coin.symbol)}
      tabIndex={-1}
      key={coin.rank}
    >  
      <TableCell>
        {coin.rank}. {coin.name}
      </TableCell>
      <TableCell numeric>
        {coin.price_usd}
      </TableCell>
      <TableCell numeric>
        {coin.market_cap_usd}
      </TableCell>
      <TableCell numeric>
        {coin.percent_change_24h}
      </TableCell>
      <TableCell numeric>
        {coin.percent_change_7d}
      </TableCell>
    </TableRow>
  );
}

export default CoinTableRow;
