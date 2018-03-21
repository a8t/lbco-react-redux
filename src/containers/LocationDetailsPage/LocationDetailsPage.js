import { connect } from 'react-redux';
import LocationDetails from 'components/LocationDetails/LocationDetails';
// import  from 'redux/actions/locationDetailActions';

const mapDispatchToProps = dispatch => {
  return {
  };
};

const mapStateToProps = state => {
  const {  } = state.locationDetails;
  return {
  };
};

const LocationDetailsPage = connect(mapStateToProps, mapDispatchToProps)(
  LocationDetails
);

export default LocationDetailsPage;
