import {combineReducers} from 'redux';
import coins from './coin';
import history from './history';
import fetching from './fetching'
const rootReducer = combineReducers({coins,history,fetching});
export default rootReducer;