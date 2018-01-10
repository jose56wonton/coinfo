import {combineReducers} from 'redux';
import coins from './coin';
import history from './history';
const rootReducer = combineReducers({coins,history});
export default rootReducer;