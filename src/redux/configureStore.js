import { combineReducers, createStore } from 'redux';
import locationSearch from 'redux/reducers/locationSearch';

const app =  combineReducers({locationSearch});

let store = createStore(app);

export default store;