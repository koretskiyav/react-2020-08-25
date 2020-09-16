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

const Restaurants = ({
  restaurants,
  loadRestaurants,
  loading,
  loaded,
  loadingUsers,
  loadedUsers,
  loadUsers,
}) => {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
    if (!loadingUsers && !loadedUsers) loadUsers();
  }, []); // eslint-disable-line

  if ((loading || !loaded) && (loadingUsers || !loadedUsers)) return <Loader />;

  const tabs = restaurants.map((restaurant) => ({
    title: restaurant.name,
    content: <Restaurant {...restaurant} />,
  }));

  return <Tabs tabs={tabs} />;
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default connect(
  (state) => ({
    restaurants: restaurantsListSelector(state),
    loading: restaurantsLoadingSelector(state),
    loaded: restaurantsLoadedSelector(state),

    loadingUsers: usersLoadingSelector(state),
    loadedUsers: usersLoadedSelector(state),
  }),
  { loadRestaurants, loadUsers }
)(Restaurants);
