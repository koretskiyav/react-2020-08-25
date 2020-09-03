import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Rate from './rate';
import Reviews from './reviews';
import Restaurant from './restaurant';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );

  return (
    <div>
      <Navigation
        onRestaurantClick={setActiveId}
        restaurants={props.restaurants}
      />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}
