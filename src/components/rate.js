import React from 'react';
import Star from '../icons/star';

const Rate = ({ rating }) => {
  const drawStars = (rating) => {
    const totalStarsAmount = 5;
    let stars = Array.from(Array(totalStarsAmount).keys());
    return stars.map((star) => <Star key={star} filled={star < rating} />);
  };

  return <span>{drawStars(rating)}</span>;
};

export default Rate;
