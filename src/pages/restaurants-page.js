import React, { useEffect } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../components/restaurants';
import Loader from '../components/loader';
import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function RestaurantsPage({ loadRestaurants, loading, loaded, match }) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, []); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  if (match.isExact) {
    return <Redirect from="/restaurants" to={`/restaurants/restaurant`} />;
  }
  return <Route path="/restaurants/:restId" component={Restaurants} />;
}

const MemoizedRestaurantsPage = React.memo(RestaurantsPage);

export default connect(
  createStructuredSelector({
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(MemoizedRestaurantsPage);
