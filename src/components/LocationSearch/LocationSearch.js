import React from "react";
import PropTypes from "prop-types";
import { Search } from "semantic-ui-react";
import styled from "styled-components";

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
  padding-bottom: 2em;
  color: rgba(0, 0, 0, 0.8);
`;

const ResultDiv = styled.div``;

const resultRenderer = props => {
  return <ResultDiv>{props.address_line_1}</ResultDiv>;
};

const LocationSearch = props => {
  return (
    <Div>
      <Label>Find an LCBO near...</Label>
      <Search autoFocus {...props} resultRenderer={resultRenderer} />
    </Div>
  );
};

LocationSearch.propTypes = {
  onResultSelect: PropTypes.func,
  onSearchChange: PropTypes.func,
  value: PropTypes.string,
  loading: PropTypes.bool,
  results: PropTypes.array
};

export default LocationSearch;
