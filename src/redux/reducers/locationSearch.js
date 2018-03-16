import { combineReducers } from 'redux'

import {
  START_LOADING,
  STOP_LOADING,
  RESET_SEARCH,
  SET_SEARCH_VALUE,
} from '../actions/LocationSearchActions';
 
const initialState = {
  isLoading: false,
  searchValue: '',
  results: [],
  selectedResult: {},
};
 
function isLoading(state = false, action) {
  switch(action.type) {
    case RESET_SEARCH:
      return false;

    case START_LOADING:
      return true;

    case STOP_LOADING:
      return false;

    default:
      return state;
  }
}
 
function searchValue(state = '', action) {
  switch(action.type) {
    case RESET_SEARCH:
      return '';

    case SET_SEARCH_VALUE:
      return action.searchValue;

    default:
      return state;
  }
}
 
function results(state = [], action) {
  switch(action.type) {
    case RESET_SEARCH:
      return false;

    case START_LOADING:
      return true;

    case STOP_LOADING:
      return false;

    default:
      return state;
  }
}

function selectedResult(state = {}, action) {
  switch(action.type) {
    case RESET_SEARCH:
      return {};

    default:
      return state;
  }
}

const locationSearch = combineReducers({
  isLoading,
  searchValue,
  results,
  selectedResult,
})
 
export default locationSearch
