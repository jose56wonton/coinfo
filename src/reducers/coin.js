import {SOME_THING} from '../actions';

export default function(state=[], action){  
  switch(action.type){    
    case SOME_THING:
      break;
    default:
      return state;
  }
}