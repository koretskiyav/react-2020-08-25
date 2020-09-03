import React from 'react';

export default function Review(props) {
  return (
    <div>
      <h1>{props.review.user}</h1>
      <p>{props.review.text}</p>
      <li>{props.review.rating}</li>
    </div>
  );
}
