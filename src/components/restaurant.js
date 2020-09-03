import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

function Restaurant(props) {
  let reviewRate = props.restaurant.reviews.map((rate) => rate.rating);
  let averageRating =
    reviewRate.reduce(
      (accumulator, currentValue) => accumulator + currentValue
    ) / reviewRate.length;

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <Reviews reviews={props.restaurant.reviews} />
      <div>
        <span>Average rating</span>
        <Rate rating={averageRating} />
      </div>
    </div>
  );
}

export default Restaurant;
