import {FETCH_COIN_LIST,SORT_COIN_LIST} from '../actions';



export default function(state=[], action){  
  switch(action.type){    
    case FETCH_COIN_LIST:
      // Remove objects without all the valid 
      const coin = action.payload.filter((ele) => {
        return (ele.market_cap_usd !== null && 
          ele.price_usd !== null && 
          ele.percent_change_24h !== null &&
          ele.percent_change_7d !==null);
      })
      return coin;
    case SORT_COIN_LIST:
      // If the values are string 
      if(action.payload.orderBy === 'name'){
        return action.payload.order === 'asc' 
        ? state.slice().sort((a, b) => (b[action.payload.orderBy] < a[action.payload.orderBy] ? -1 : 1))
        : state.slice().sort((a, b) => (a[action.payload.orderBy] < b[action.payload.orderBy] ? -1 : 1));
      }
      else // If the values are ints in a string
      {
        return action.payload.order === 'asc' 
        ? state.slice().sort((a, b) => (Number(b[action.payload.orderBy]) < Number(a[action.payload.orderBy]) ? -1 : 1))
        : state.slice().sort((a, b) => (Number(a[action.payload.orderBy]) < Number(b[action.payload.orderBy]) ? -1 : 1));
      }
      
    default:
      return state;
  }
}