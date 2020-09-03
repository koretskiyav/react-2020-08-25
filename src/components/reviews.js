import React from 'react';
import Rate from './rate';

export default function Review(props) {
  const { user, text, rating } = props.review;

  return (
    <div>
      <Rate rate={rating} />
      <h2>User: {user}</h2>
      <p>Review: {text}</p>
    </div>
  );
}
