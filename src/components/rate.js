import React from 'react';
import Star from '../icons/star';

const Rate = ({ rating }) => {
  const drawStars = (rating) => {
    let cnt = 0;
    let totalStarsAmount = 5;
    let stars = [];

    while (cnt < totalStarsAmount) {
      stars.push(<Star key={cnt} filled={cnt < rating} />);
      cnt++;
    }

    return stars;
  };

  return <span>{drawStars(rating)}</span>;
};

export default Rate;
