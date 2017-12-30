import {FETCH_COIN_LIST,FETCH_COIN_PRICES} from '../actions';

function compareByCap(a,b){
  if (a.SortOrder < b.SortOrder)
    return -1;
  if (a.SortOrder > b.SortOrder)
    return 1;
  return 0;
}

export default function(state=[], action){  
  switch(action.type){    
    case FETCH_COIN_LIST:
        var arr = Object.values(action.payload.Data);
        return arr; 
    case FETCH_COIN_PRICES:
        const curr = state.slice();
        const data = action.payload.DISPLAY;
       
        curr.forEach((ele) =>{
          if(ele.Name in data)
            ele['usd'] = data[ele.Name].USD;
        })
        return curr;              
    default:
      return state;
  }
}