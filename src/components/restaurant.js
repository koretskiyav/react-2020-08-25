import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rating from './rating';

export default function Restaurant(props) {
  const menu = props.restaurant.menu;
  const reviews = props.restaurant.reviews;

  let total = 0;
  for (let i = 0; i < reviews.length; i++) {
    total += reviews[i].rating;
  }
  const avgRating = Math.round(total / reviews.length);

  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      Average Rating:
      <Rating rating={avgRating} />
    </div>
  );
}
