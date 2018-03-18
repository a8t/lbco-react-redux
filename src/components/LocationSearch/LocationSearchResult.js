import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ResultContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.div`
  font-weight: 800;
`;

const Address = styled.div`
  display: flex;
  flex-direction: column;

  .dash {
    display: none;
  }

  @media screen and (min-width: 450px) {
    flex-direction: row;
    color: #444;

    .dash {
      display: block;
      margin: 0 3px;
    }
  }
`;

const ResultHeader = styled.div`
  display: flex;
  flex-direction: column;
`;

const ResultBody = styled.div`
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;

  .icon {
    margin: 5px 3px;
    box-sizing: border-box;
    font-size: 1.3em !important;
  }

  .disabled.icon {
    opacity: 0.25 !important;
    font-size: 1em !important;
    margin: 0.4em;
  }

  @media screen and (min-width: 450px) {
    flex-direction: row;
  }
`;

const toKilometers = distance_in_meters => (distance_in_meters / 1000).toFixed(1);

const formattedDistance = distance_in_meters =>
  distance_in_meters < 999
    ? `${String(Math.round(distance_in_meters / 10) * 10)} m`
    : `${toKilometers(distance_in_meters)} km`;

const openClosed = props => {
  const currentDateTime = new Date();
  const currentMinutes = currentDateTime.getHours() * 60 + currentDateTime.getMinutes();
  const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const currentDayOfWeek = days[currentDateTime.getDay()];
  const currentDayOpenTime = props[`${currentDayOfWeek}_open`];
  const currentDayCloseTime = props[`${currentDayOfWeek}_close`];
  const isOpen = currentMinutes > currentDayOpenTime && currentMinutes < currentDayCloseTime;

  const hours = minsSinceMidnight => String(Math.floor(minsSinceMidnight / 60) % 12);
  const minutes = minsSinceMidnight =>
    minsSinceMidnight % 60 > 9
      ? String(minsSinceMidnight % 60)
      : `0${String(minsSinceMidnight % 60)}`;
  const toTwelveHourTime = minsSinceMidnight =>
    `${hours(minsSinceMidnight)}:${minutes(minsSinceMidnight)}`;
  const amPm = minsSinceMidnight => (minsSinceMidnight < 60 * 12 ? 'am' : 'pm');

  const Span = styled.span`
    color: ${props => (props.isOpen ? 'green' : 'rgba(255,0,0,0.5)')};
  `;
  return (
    <Span isOpen={isOpen}>
      {isOpen
        ? `Open until ${toTwelveHourTime(currentDayCloseTime)} ${amPm(currentDayCloseTime)}`
        : 'Closed now'}
    </Span>
  );
};

const Result = props => {
  const {
    address_line_1,
    distance_in_meters,
    name,
    has_wheelchair_accessability,
    has_parking,
    has_transit_access,
  } = props['data-result'];

  return (
    <ResultContainer>
      <ResultHeader>
        <Title>{name}</Title>
        {openClosed(props['data-result'])}
        <Address>
          <div>{address_line_1}</div>
          <div className="dash"> — </div>
          <div>{formattedDistance(distance_in_meters)}</div>
        </Address>
      </ResultHeader>
      <ResultBody>
        <Icon
          name={'wheelchair'}
          alt={'Wheelchair accessible'}
          disabled={!has_wheelchair_accessability}
          size={'large'}
        />
        <Icon name={'car'} alt={'Has parking'} disabled={!has_parking} size={'large'} />
        <Icon
          name={'bus'}
          alt={'Transit accessible'}
          disabled={!has_transit_access}
          size={'large'}
        />
      </ResultBody>
    </ResultContainer>
  );
};

Result.propTypes = {
  id: PropTypes.number,
  is_dead: PropTypes.bool,
  name: PropTypes.string,
  tags: PropTypes.string,
  address_line_1: PropTypes.string,
  address_line_2: PropTypes.string,
  city: PropTypes.string,
  postal_code: PropTypes.string,
  telephone: PropTypes.string,
  fax: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  products_count: PropTypes.number,
  inventory_count: PropTypes.number,
  inventory_price_in_cents: PropTypes.number,
  inventory_volume_in_milliliters: PropTypes.number,
  has_wheelchair_accessability: PropTypes.bool,
  has_bilingual_services: PropTypes.bool,
  has_product_consultant: PropTypes.bool,
  has_tasting_bar: PropTypes.bool,
  has_beer_cold_room: PropTypes.bool,
  has_special_occasion_permits: PropTypes.bool,
  has_vintages_corner: PropTypes.bool,
  has_parking: PropTypes.bool,
  has_transit_access: PropTypes.bool,
  sunday_open: PropTypes.number,
  sunday_close: PropTypes.number,
  monday_open: PropTypes.number,
  monday_close: PropTypes.number,
  tuesday_open: PropTypes.number,
  tuesday_close: PropTypes.number,
  wednesday_open: PropTypes.number,
  wednesday_close: PropTypes.number,
  thursday_open: PropTypes.number,
  thursday_close: PropTypes.number,
  friday_open: PropTypes.number,
  friday_close: PropTypes.number,
  saturday_open: PropTypes.number,
  saturday_close: PropTypes.number,
  updated_at: PropTypes.string,
  distance_in_meters: PropTypes.number,
  store_no: PropTypes.number,
  key: PropTypes.number
};

export default Result;
