import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Rating from './rate';

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
      <Rating rating={2} />
      <Menu menu={activeRestaurant.menu} />
    </div>
  );
}
