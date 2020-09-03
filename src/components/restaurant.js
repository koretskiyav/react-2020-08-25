import React from 'react';

import Menu from './menu';
import Reviews from './reviews';
import AverageRating from './averagerating';

export default function Restaurant(props) {
  return (
    <div>
      <Menu menu={props.activeRestaurant.menu} />
      <hr />
      <Reviews reviews={props.activeRestaurant.reviews} />
      <hr />
      <AverageRating reviews={props.activeRestaurant.reviews} />
    </div>
  );
}
