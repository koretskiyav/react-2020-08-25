import React, { Fragment, useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';

const Restaurant = function({restaurant}) {
  const {reviews, menu} = restaurant;

  const averageRating = useMemo(() => {
      return Math.round(
        reviews
        .reduce((total, next) => total + next.rating, 0) / reviews.length);
    },
    [reviews]
  );

  return (
    <Fragment>
      <p className='average-rating'>Average rating: {averageRating}</p>
      <Reviews reviews={reviews}/>
      <Menu menu={menu} />
    </Fragment>
  )

}

export default Restaurant;
