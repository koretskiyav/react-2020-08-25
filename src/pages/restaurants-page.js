import React, { useEffect } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Restaurants from '../components/restaurants';
import RestaurantReview from '../components/restaurantreview';
import Loader from '../components/loader';
import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../redux/selectors';
import { loadRestaurants } from '../redux/actions';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

function RestaurantsPage({
  restaurants,
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
      <div>
        <h2>select restaurant:</h2>
        {restaurants.map(({ id, name }) => (
          <p key={id}>
            <Link to={`/restaurants/${id}/menu`}>{name}</Link>
          </p>
        ))}
      </div>
    );
  }

  return (
    <Switch>
      <Route path="/restaurants/:restId/menu" component={Restaurants} />
      <Route
        path="/restaurants/:restId/review"
        render={({ match }) => (
          <RestaurantReview pageType="review" match={match} />
        )}
      />
      <Route path="/restaurants/:restId" component={Restaurants} />
    </Switch>
  );
}

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
    loading: restaurantsLoadingSelector,
    loaded: restaurantsLoadedSelector,
  }),
  { loadRestaurants }
)(RestaurantsPage);
