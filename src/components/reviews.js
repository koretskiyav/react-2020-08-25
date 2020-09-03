import React from 'react';
import Rate from './rate';

const Reviews = ({ reviews }) => {
  return (
    <ul>
      {reviews.map((review) => {
        const { id, user, text, rating } = review;
        return (
          <li key={id}>
            <p>
              {user} <Rate rating={rating} />
            </p>
            <p>{text}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default Reviews;
