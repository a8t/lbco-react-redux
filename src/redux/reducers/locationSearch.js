import { combineReducers } from 'redux'

import {
  START_LOADING,
  STOP_LOADING,
  RESET_SEARCH,
  SET_SEARCH_VALUE,
} from 'redux/actions/locationSearchActions';
 
const initialState = {
  isLoading: false,
  searchValue: '',
  results: [],
  selectedResult: {},
};
 
function isLoading(state = initialState.isLoading, action) {
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
 
function searchValue(state = initialState.searchValue, action) {
  switch(action.type) {
    case RESET_SEARCH:
      return '';

    case SET_SEARCH_VALUE:
      return action.searchValue;

    default:
      return state;
  }
}
 
function results(state = initialState.results, action) {
  switch(action.type) {
    default:
      return state;
  }
}

function selectedResult(state = initialState.selectedResult, action) {
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
});
 
export default locationSearch;
