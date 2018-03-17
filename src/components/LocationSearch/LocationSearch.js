import React from 'react';
import PropTypes from 'prop-types';
import { Search } from 'semantic-ui-react';
import styled from 'styled-components';
import Result from './LocationSearchResult'

const Div = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 20%;
  font-size: 1em;
`;

const Label = styled.span`
  font-size: 2em;
  padding-bottom: 1em;
  color: rgba(0, 0, 0, 0.8);
`;

const ResultDiv = styled.div``;
const TitleDiv = styled.div`
  font-weight: 800;
`;

const resultRenderer = props => {
  const { address_line_1, distance_in_meters, name } = props;

  const toKilometers = distance_in_meters =>
    (distance_in_meters / 1000).toFixed(1);
  const formattedDistance =
    distance_in_meters < 999
      ? `${String(Math.round(distance_in_meters / 10) * 10)} m`
      : `${toKilometers(distance_in_meters)} km`;

  const isOpen = () => {
    const currentDateTime = new Date();
    const currentMilitaryTime =
      String(currentDateTime.getHours()) + String(currentDateTime.getMinutes());
    const days = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ];
    const currentDayOfWeek = days[currentDateTime.getDay()];
    const currentDayOpenTime = props[`${currentDayOfWeek}_open`];
    const currentDayCloseTime = props[`${currentDayOfWeek}_close`];
    return currentMilitaryTime > currentDayOpenTime && currentMilitaryTime < currentDayCloseTime;
  };

  return (
    <ResultDiv>
      <TitleDiv>{name}</TitleDiv>
      {address_line_1} — {formattedDistance} ({isOpen ? "Open" : "Closed"})
    </ResultDiv>
  );
};

const LocationSearchMain = styled(Search)`
  &&& {
    width: 80vw;
  }

  input {
    width: 80vw;
  }
`;

const LocationSearch = props => {
  return (
    <Div>
      <Label>Find an LCBO near...</Label>
      <LocationSearchMain
        fluid
        autoFocus
        {...props}
        resultRenderer={resultRenderer}
      />
    </Div>
  );
};

LocationSearch.propTypes = {
  onResultSelect: PropTypes.func,
  onSearchChange: PropTypes.func,
  value: PropTypes.string,
  loading: PropTypes.bool,
  results: PropTypes.arrayOf(PropTypes.object)
};

export default LocationSearch;
