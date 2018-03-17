import { connect } from 'react-redux';
import LocationSearch from 'components/LocationSearch/LocationSearch';
import {
  resetSearch,
  setSearchValue,
  fetchAddresses
} from 'redux/actions/locationSearchActions';

const mapDispatchToProps = dispatch => {
  const handleResultSelect = (e, { result }) => {};

  const handleSearchChange = (e, { value }) => {
    dispatch(setSearchValue(value));
    if (value.length < 1) {
      dispatch(resetSearch());
    } else {
      dispatch(fetchAddresses(value));
    }
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

const LocationSearchPage = connect(mapStateToProps, mapDispatchToProps)(
  LocationSearch
);

export default LocationSearchPage;
