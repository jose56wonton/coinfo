import * as api from "../api.js";
export const FETCH_COIN_LIST = "fetch_coin_list";
export const SORT_COIN_LIST = "sort_coin_list";
export const FETCH_COIN_HISTORY = "fetch_coin_history";
export const TOGGLE_FETCHING = "toggle_fetching";
export const TOGGLE_ALERT = "toggle_alert";
// Api Buffers For loading
export function toggleFetching(stateToAdjust){
  return{
  type: TOGGLE_FETCHING,
  payload: stateToAdjust
  }
}
// Api

function sleepFor( sleepDuration ){
  var now = new Date().getTime();
  while(new Date().getTime() < now + sleepDuration){ /* do nothing */ } 
}
function sleepThenAct(){ console.log(1);sleepFor(500);console.log(3);return api.fetchCoinList(); }
export function fetchCoinList() {
  const request = sleepThenAct();
  
  return dispatch => {
    dispatch(toggleFetching("coin"));
    
    request.then(({ data }) => {
      console.log("nice")
      dispatch({ type: FETCH_COIN_LIST, payload: data });
      dispatch(toggleFetching("coin"));
    }).catch(()=>{
    dispatch(toggleFetching("coin"));});
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
export function toggleAlert(){
  return{
  type: TOGGLE_ALERT
  }
}