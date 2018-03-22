import axios from "axios";
import { debounce } from "lodash";
import { googleMapsKey } from "../../api/googleMapsApi";
import { lcboKey, lcboUrl } from "../../api/lcboapi";

export const RESET_SEARCH = "RESET_SEARCH";
export const resetSearch = () => {
  return {
    type: RESET_SEARCH
  };
};

export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const setSearchValue = searchValue => {
  return {
    type: SET_SEARCH_VALUE,
    searchValue: searchValue
  };
};

export const SET_RESULTS = "SET_RESULTS";
export const setResults = results => {
  return {
    type: SET_RESULTS,
    results: results
  };
};

export const SELECT_RESULT = "SELECT_RESULT";
export const selectResult = resultKey => {
  return {
    type: SELECT_RESULT,
    resultKey: resultKey
  };
};

export const DESELECT_RESULTS = "DESELECT_RESULTS";
export const deselectAllResults = () => {
  return {
    type: DESELECT_RESULTS,
  };
};

export const FETCH_ADDRESSES_START = "FETCH_ADDRESSES_START";
const fetchAddressesStart = () => {
  return {
    type: FETCH_ADDRESSES_START
  };
};

export const FETCH_ADDRESSES_END = "FETCH_ADDRESSES_END";
const fetchAddressesEnd = () => {
  return {
    type: FETCH_ADDRESSES_END
  };
};

export const FETCH_ADDRESSES_ERROR = "FETCH_ADDRESSES_ERROR";
const fetchAddressesError = () => {
  return {
    type: FETCH_ADDRESSES_ERROR
  };
};

const getLcboLocations = debounce((dispatch, address) => {
  const mapsUrl = "https://maps.googleapis.com/maps/api/geocode/json";
  const mapsQuery = `?address=${address}&components=country:CA&key=${googleMapsKey}`;
  axios
    .get(`${mapsUrl}${mapsQuery}`)
    .then(response => {
      const { lat, lng } = response.data.results[0].geometry.location;
      const lcboEndpoint = `${lcboUrl}/stores?lat=${lat}&lon=${lng}&access_key=${lcboKey}`;
      return axios.get(lcboEndpoint);
    })
    .then(response => {
      const addKey = each => {
        return {
          key: each.id,
          'data-result': { ...each, resultSelected: false },
        };
      };
      dispatch(setResults(response.data.result.slice(0, 4).map(addKey)));
      dispatch(fetchAddressesEnd());
    })
    .catch(e => {
      dispatch(fetchAddressesError());
    });
}, 500);

export const fetchAddresses = address => {
  return function(dispatch) {
    if (address.length < 3) {
      return;
    }
    dispatch(fetchAddressesStart());
    getLcboLocations(dispatch, address);
  };
};
