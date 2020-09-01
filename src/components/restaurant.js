import React from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ activeRestaurant }) {
  const averageRating = Math.ceil(
    activeRestaurant.reviews
      .map(({ rating }) => rating)
      .reduce((a, c) => a + c) / activeRestaurant.reviews.length
  );

  return (
    <>
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} />
      <Rate text="Средний рейтинг" rating={averageRating} />
    </>
  );
}
