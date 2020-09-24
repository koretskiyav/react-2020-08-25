import React, { useEffect } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Restaurants from '../components/restaurants';
import Loader from '../components/loader';
import {
  firstLoadedRestaurantIdSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function RestaurantsPage({
  firstLoadedRestaurantId,
  loadRestaurants,
  loading,
  loaded,
  match,
  history,
}) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  if (match.isExact) {
    return (
      <>
        <Restaurants match={match} history={history} />
        <Redirect
          from="/restaurants"
          to={`/restaurants/${firstLoadedRestaurantId}`}
        />
        {/*<h2 style={{ textAlign: 'center' }}>Select restaurant</h2>*/}
      </>
    );
  }

  return <Route path="/restaurants/:restId" component={Restaurants} />;
}

export default connect(
  createStructuredSelector({
    firstLoadedRestaurantId: firstLoadedRestaurantIdSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
