
import * as api from '../api.js';
export const FETCH_COIN_LIST = "fetch_coin_list";
export const FETCH_COIN_PRICES = "fetch_coin_prices"
export function fetchCoinList(values){
  const request = api.fetchCoinList();
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: FETCH_COIN_LIST, payload: data})  
         
    });    
  };
}
export function fetchCoinPrices(values){
  const request = api.fetchCoinPrices(values);
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: FETCH_COIN_PRICES, payload: data})     
    });    
  };
}