import { combineReducers } from 'redux';
import locationSearch from 'redux/reducers/locationSearchReducers';

const rootReducer =  combineReducers({locationSearch});

export default rootReducer;