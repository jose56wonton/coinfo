import {FETCH_COIN_HISTORY} from '../actions';


export default function(state=[], action){  
  switch(action.type){        
    case FETCH_COIN_HISTORY:
    console.log(action.payload);
      return action.payload; 
    
    default:
      return state;
  }
}