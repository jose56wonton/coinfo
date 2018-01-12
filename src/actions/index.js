import * as api from "../api.js";
export const FETCH_COIN_LIST = "fetch_coin_list";
export const SORT_COIN_LIST = "sort_coin_list";
export const FETCH_COIN_HISTORY = "fetch_coin_history";
export const TOGGLE_FETCHING = "toggle_fetching";

// Api Buffers For loading
export function toggleFetching(stateToAdjust){
  return{
  type: TOGGLE_FETCHING,
  payload: stateToAdjust
  }
}
// Api
export function fetchCoinList() {
  const request = api.fetchCoinList();
  return dispatch => {
    dispatch(toggleFetching("coin"))
    request.then(({ data }) => {
      dispatch({ type: FETCH_COIN_LIST, payload: data });
      dispatch(toggleFetching("coin"));
    }).catch(()=>{dispatch(toggleFetching("coin"));});
  };
}
export function fetchCoinHistory(coin,start, inc, num) {
  const request = api.fetchCoinHistory(coin, start, inc, num);
  return dispatch => {
    dispatch(toggleFetching("history"))
    request.then(({ data }) => {
      dispatch({ 
        type: FETCH_COIN_HISTORY, 
        payload: data
       });
       dispatch(toggleFetching("history"))
    }).catch(()=>{dispatch(toggleFetching("history"));});;
  };
}
// State Mutation
export function sortCoinList(order, orderBy) {
  return {
    type: SORT_COIN_LIST,
    payload: { order, orderBy }
  };
}