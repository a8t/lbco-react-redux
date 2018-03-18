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
  padding-top: 20vh;
  font-size: 1em;
`;

const Label = styled.span`
  font-size: 2em;
  padding-bottom: 1em;
  color: rgba(0, 0, 0, 0.8);
`;

const LocationSearchMain = styled(Search)`
  &&& {
    width: 80vw;
    max-width: 400px;
  }

  .input {
    font-size: 1.5em;
    width: 80vw;
    max-width: 400px;
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
        open
        resultRenderer={Result}
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
