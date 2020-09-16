import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';
import { loadRestaurants, loadUsers } from '../../redux/actions';

const Restaurants = ({ restaurants, users, loadUsers, loadRestaurants }) => {
  useEffect(() => {
    if (!restaurants.loading && !restaurants.loaded) loadRestaurants();
    if (!users.loadingUsers && !users.loadedUsers) loadUsers();
  }, []); // eslint-disable-line

  if (restaurants.loading || !restaurants.loaded) return <Loader />;

  const tabs = restaurants.restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant {...restaurant} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
    restaurants: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default connect(
  (state) => ({
    restaurants: {
      restaurants: restaurantsListSelector(state),
      loading: restaurantsLoadingSelector(state),
      loaded: restaurantsLoadedSelector(state),
    },
    users: {
      loading: usersLoadingSelector(state),
      loaded: usersLoadedSelector(state),
    },
  }),
  { loadRestaurants, loadUsers }
)(Restaurants);
