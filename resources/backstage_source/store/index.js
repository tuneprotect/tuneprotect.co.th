import {combineReducers, createStore} from 'redux';
import {systemReducer} from "./system/SystemReducer";

const store = createStore(
    combineReducers({
        system: systemReducer
    }));
export default store;
