import React from 'react';
import Rate from './rate';

function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <div key={review.id}>
          <p>user - {review.user}</p>
          <p>text - {review.text}</p>
          <Rate rating={review.rating} />
        </div>
      ))}
    </div>
  );
}

export default Reviews;
