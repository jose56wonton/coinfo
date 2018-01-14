import { FETCH_COIN_LIST, SORT_COIN_LIST } from "../actions";
import numeral from "numeral";
export default function(state = [], action) {
  switch (action.type) {
    case FETCH_COIN_LIST:
      // Remove objects without all the valid
      const coin = action.payload.filter(ele => {
        return (
          ele.market_cap_usd !== null &&
          ele.price_usd !== null &&
          ele.percent_change_24h !== null &&
          ele.percent_change_7d !== null
        );
      });
      console.log(coin);
      return coin;
    case SORT_COIN_LIST:
      return action.payload.order === "asc"
        ? state
            .slice()
            .sort(
              (a, b) =>
                Number(b[action.payload.orderBy]) <
                Number(a[action.payload.orderBy])
                  ? -1
                  : 1
            )
        : state
            .slice()
            .sort(
              (a, b) =>
                Number(a[action.payload.orderBy]) <
                Number(b[action.payload.orderBy])
                  ? -1
                  : 1
            );

    default:
      return state;
  }
}
