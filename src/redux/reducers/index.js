import { combineReducers } from 'redux';
import location from 'redux/reducers/locationReducers';

const rootReducer =  combineReducers({location});

export default rootReducer;