import React from 'react';
import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant(props) {
  const reviews = props.restaurant.reviews;
  const averageRate = Math.round(
    reviews.reduce((acc, curr) => acc + curr.rating, 0) / reviews.length
  );

  return (
    <div>
      <Menu menu={props.restaurant.menu} />
      <p>
        Средний рейтинг: <Rate count={averageRate} />
      </p>
      <Reviews reviews={reviews} />
    </div>
  );
}
