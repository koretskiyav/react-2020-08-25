import React from 'react';
import Rating from './rate';

export default function Review(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <div>Name: {review.user}:</div>
          <div>
            Rating: <Rating rating={review.rating} />
          </div>
          <div>Text: {review.text}</div>
        </div>
      ))}
    </div>
  );
}
