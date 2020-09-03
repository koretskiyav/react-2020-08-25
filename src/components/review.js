import React from 'react';
import Rate from './rate';

export default function Review(props) {
  const { review } = props;

  return (
    <div>
      <h3>User: {review.user}</h3>
      <p>Review: {review.text}</p>
      <p>Rating:</p>
      <Rate rate={review.rating}/>
    </div>
  );
}