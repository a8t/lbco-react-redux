import {
  START_LOADING,
  STOP_LOADING,
  RESET_SEARCH,
  SET_SEARCH_VALUE,
} from '../actions/LocationSearchActions';
 
const initialState = {
  isLoading: false,
  results: [],
  searchValue: '',
};
 
export default function locationSearch(state = initialState, action) {
  switch(action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true
      };

    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
      };

    case RESET_SEARCH:
      return initialState;

    case SET_SEARCH_VALUE:
      return {
        ...state,
        searchValue: action.searchValue,
      };

    default:
      return state;
  }
}
