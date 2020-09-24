import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

import { restaurantsListSelector } from '../../redux/selectors';

const Restaurants = ({ restaurants, match }) => {
  const { restId } = match.params;
  const restaurantFound = restaurants.find(
    (restaurant) => restaurant.id === restId
  );
  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    to: `/restaurants/${id}/menu`,
  }));
  const restaurantDefault = restaurantFound ? restaurantFound : restaurants[0];
  return (
    <>
      <Tabs tabs={tabs} />
      <Restaurant {...restaurantDefault} />
    </>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
  })
)(Restaurants);
