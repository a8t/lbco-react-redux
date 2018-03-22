import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import LocationSearch from '../../components/LocationSearch/LocationSearch';
import {
  resetSearch,
  setSearchValue,
  fetchAddresses,
  selectResult,
  deselectAllResults,
} from '../../redux/actions/locationActions';

const mapDispatchToProps = dispatch => {
  const handleResultSelect = (e, { result }) => {
    dispatch(push('/about'))
    if (result.resultSelected) {
      dispatch(deselectAllResults());
    } else {
      dispatch(selectResult(result.key, result['data-result']));
    }
  };

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
  const { isLoading, results, searchValue } = state.rootReducer.location;
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
