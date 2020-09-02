import React from 'react';
import Review from './review';

const Reviews: React.FC = ({ restaurant }) => {
  return (
    <>
      <h2>Reviews ({restaurant.reviews.length})</h2>
      {restaurant.reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </>
  );
};

export default Reviews;
