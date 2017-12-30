import {GET_LIST} from '../actions';
import * as api from '../api.js';
export default function(state={}, action){  
  switch(action.type){    
    case GET_LIST:
      api.getList()
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((error) => {
        console.log(error);
        return error;
      })
      
    default:
      return state;
  }
}