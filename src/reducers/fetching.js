import {TOGGLE_FETCHING} from '../actions';
const initState = {coin:false,history:false}
export default function(state=initState, action){  
  switch(action.type){
    case TOGGLE_FETCHING:
    var newState = {...state};
      if(action.payload == "coin")
        return {...state,coin:!state.coin}        
      if(action.payload === "history")
        return {...state,history:!state.history}
      return state;
    default:
      return state;
  }
}