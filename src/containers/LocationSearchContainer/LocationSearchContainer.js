import { connect } from "react-redux";
import LocationSearch from "components/LocationSearch/LocationSearch";
import {
  setSearchValue,
  fetchAddresses
} from "redux/actions/locationSearchActions";

const mapDispatchToProps = dispatch => {
  const handleResultSelect = (e, { result }) => {};

  const handleSearchChange = (e, { value }) => {
    dispatch(setSearchValue(value));
    dispatch(fetchAddresses(value));
  };

  return {
    onResultSelect: handleResultSelect,
    onSearchChange: handleSearchChange
  };
};

const mapStateToProps = state => {
  const { isLoading, results, searchValue } = state.locationSearch;
  return {
    loading: isLoading,
    results: results,
    value: searchValue
  };
};

const LocationSearchContainer = connect(mapStateToProps, mapDispatchToProps)(
  LocationSearch
);

export default LocationSearchContainer;
