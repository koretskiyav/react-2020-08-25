import React from 'react';
import Rating from './rate';

export default function Review({ reviews }) {
  return (
    <div>
      {reviews.map(({ id, user, rating, text }) => (
        <div key={id}>
          <div>Name: {user}:</div>
          <div>
            Rating: <Rating rating={rating} />
          </div>
          <div>Text: {text}</div>
        </div>
      ))}
    </div>
  );
}
