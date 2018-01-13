import { combineReducers } from "redux";
import coins from "./coin";
import history from "./history";
import fetching from "./fetching";
import alert from './alert';
const rootReducer = combineReducers({ coins, history, fetching, alert });
export default rootReducer;
