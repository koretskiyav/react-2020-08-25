import React, { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

const Restaurant = (props) => {
  const {
    restaurantData: { menu, reviews },
  } = props;

  const calcAverageRating = (reviews) => {
    return Math.round(
      reviews.reduce((acc, review) => {
        return acc + review.rating;
      }, 0) / reviews.length
    );
  };

  const memoizedCalcAverageRating = useMemo(() => calcAverageRating(reviews), [
    reviews,
  ]);

  return (
    <div>
      <Menu menu={menu} />
      <hr />
      <Rate rating={memoizedCalcAverageRating} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Restaurant;
