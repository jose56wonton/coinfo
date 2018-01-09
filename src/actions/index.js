
import * as api from '../api.js';
export const FETCH_COIN_LIST = "fetch_coin_list";
export const SORT_COIN_LIST = "sort_coin_list";
export function fetchCoinList(){
  const request = api.fetchCoinList();
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: FETCH_COIN_LIST, payload: data})           
    });    
  };
}
export function sortCoinList(order,orderBy){
  return {
    type: SORT_COIN_LIST,
    payload: {order,orderBy}
  }
}
