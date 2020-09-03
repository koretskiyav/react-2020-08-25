import React from 'react';
import Rate from './rate';

function Reviews(props) {
  return (
    <div>
      {props.reviews.map((review) => (
        <>
          <p>user - {review.user}</p>
          <p>text - {review.text}</p>
          <Rate key={review.id} rating={review.rating} />
        </>
      ))}
    </div>
  );
}

export default Reviews;
