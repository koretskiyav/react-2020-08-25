import React, { useState, useMemo } from 'react';
import Restaurant from '../restaurant';
import Navigation from '../navigation';
import PropTypes from 'prop-types';
import RestaurantType from '../restaurant/restaurant.type';

const Restaurants = ({ restaurants }) => {
  const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

  const activeRestaurant = useMemo(
    () => restaurants.find(({ id }) => id === activeRestaurantId),
    [activeRestaurantId, restaurants]
  );

  return (
    <div>
      <Navigation
        restaurants={restaurants}
        onRestaurantClick={setActiveRestaurant}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(PropTypes.shape(RestaurantType)),
};

export default Restaurants;
