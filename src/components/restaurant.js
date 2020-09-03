import React from 'react';

import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  return (
    <div>
      <hr />
      <h3>{props.restaurant.name}</h3>
      <Reviews reviews={props.restaurant.reviews} />
      <hr />
    </div>
  );
}
