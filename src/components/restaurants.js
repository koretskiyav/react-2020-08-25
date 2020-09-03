import React, { useState, useMemo } from 'react';
import Menu from './menu';
import Navigation from './navigation';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurants(props) {
  const [activeId, setActiveId] = useState(props.restaurants[0].id);

  const activeRestaurant = useMemo(
    () => props.restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, props.restaurants]
  );

  function averageRate(reviews) {
    let sumRate = 0;
    for (let index = 0; index < reviews.length; index++) {
      sumRate += reviews[index].rating;
    }
    return parseInt(sumRate / reviews.length);
  }

  return (
    <div>
      <Navigation
        onRestaurantClick={setActiveId}
        restaurants={props.restaurants}
      />
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} />
      <h1>
        {' '}
        Average stars: <Rate rate={averageRate(activeRestaurant.reviews)} />
      </h1>
    </div>
  );
}
