import {FETCH_COIN_HISTORY,GET_THAT_SHIT} from '../actions';
import data from './getThatShit';

export default function(state=[], action){  
  switch(action.type){        
    case FETCH_COIN_HISTORY:
      
      return action.payload;  
    case GET_THAT_SHIT: 
    
      return data; 
    default:
      return state;
  }
}