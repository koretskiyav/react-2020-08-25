import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ menu, reviews }) {
  const sum = reviews.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.rating;
  }, 0);

  const averageRating = sum / reviews.length;

  return (
    <div>
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
      <br />
      <hr />
      <br />
      Average rating:
      <Rate
        rate={{
          rating: averageRating,
        }}
      />
    </div>
  );
}
