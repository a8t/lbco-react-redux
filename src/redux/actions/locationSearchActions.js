// LocationSearch action constants
export const START_LOADING = 'START_LOADING';
export const STOP_LOADING = 'STOP_LOADING';
export const RESET_SEARCH = 'RESET_SEARCH';
export const SET_SEARCH_VALUE = 'SET_SEARCH_VALUE';

// LocationSearch action creators
export const startLoading = () => {
  return {
    type: START_LOADING,
  }
}

export const stopLoading = () => {
  return {
    type: STOP_LOADING,
  }
}

export const resetSearch = () => {
  return {
    type: RESET_SEARCH,
  }
}

export const setSearchValue = (searchValue) => {
  return {
    type: SET_SEARCH_VALUE,
    searchValue: searchValue,
  }
}
