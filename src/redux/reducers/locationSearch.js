import { combineReducers } from "redux";

import {
  FETCH_ADDRESSES_START,
  FETCH_ADDRESSES_END,
  FETCH_ADDRESSES_ERROR,
  RESET_SEARCH,
  SET_SEARCH_VALUE,
  SET_RESULTS
} from "redux/actions/locationSearchActions";
const initialState = {
  isLoading: false,
  searchValue: "",
  results: [],
  selectedResult: {}
};
function isLoading(state = initialState.isLoading, action) {
  switch (action.type) {
    case RESET_SEARCH:
      return false;

    case FETCH_ADDRESSES_START:
      return true;

    case FETCH_ADDRESSES_END:
      return false;

    case FETCH_ADDRESSES_ERROR:
      return false;

    default:
      return state;
  }
}
function searchValue(state = initialState.searchValue, action) {
  switch (action.type) {
    case RESET_SEARCH:
      return "";

    case SET_SEARCH_VALUE:
      return action.searchValue;

    default:
      return state;
  }
}
function results(state = initialState.results, action) {
  switch (action.type) {
    case SET_RESULTS:
      return action.results;

    case FETCH_ADDRESSES_ERROR:
      return initialState.results;

    default:
      return state;
  }
}

function selectedResult(state = initialState.selectedResult, action) {
  switch (action.type) {
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
  selectedResult
});
export default locationSearch;
