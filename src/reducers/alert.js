import {TOGGLE_ALERT} from '../actions';

export default function(state=true, action){  
  switch(action.type){        
    case TOGGLE_ALERT:
      return !state;     
    default:
      return state;
  }
}