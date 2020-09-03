import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <h1>
          {review.user} : {review.text}
          <Rate rate={review.rating} />
        </h1>
      ))}
    </div>
  );
}
