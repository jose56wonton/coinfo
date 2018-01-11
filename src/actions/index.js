
import * as api from '../api.js';
export const FETCH_COIN_LIST = "fetch_coin_list";
export const SORT_COIN_LIST = "sort_coin_list";
export const FETCH_COIN_HISTORY = "fetch_coin_history";
export const GET_THAT_SHIT = "get_that_shit";
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
export function fetchCoinHistory(coin,start,finish,period){
  const request = api.fetchCoinHistory(coin,start,finish,period);
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: FETCH_COIN_HISTORY, payload: data})           
    });    
  };
}
export function getThatShit(coin,period){
  return{
    type:GET_THAT_SHIT, coin: coin,period: period 
  }
}