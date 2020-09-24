import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

import { restaurantsListSelector } from '../../redux/selectors';

import { Redirect, Route, Switch } from 'react-router-dom';

const Restaurants = ({ restaurants, match, history }) => {
  const { restId } = match.params;
  const restaurant = restaurants.find((restaurant) => restaurant.id === restId);

  const tabs = restaurants.map(({ id, name }) => ({
    title: name,
    to: `/restaurants/${id}/menu`,
  }));

  return (
    <>
      <Tabs tabs={tabs} />
      {restId && <Restaurant {...restaurant} />}

      <Switch>
        <Redirect exact from="/restaurants" to={`/restaurants/${id}`} />
      </Switch>
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
