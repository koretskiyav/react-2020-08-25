import React from 'react';
import Rating from './rating';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          {review.text}
          <Rating rating={review.rating} />
          {review.user}
          <br />
          <br />
        </div>
      ))}
    </div>
  );
}
