import React from 'react';

import Star from '../icons/star';

export default function Rate(props) {
  const allStars = [1, 2, 3, 4, 5];
  const starsRate = props.rate;
  const listItems = allStars.map((star, index) => (
    <Star state={index < starsRate} />
  ));

  return (
    <div>
      <p>
        {' '}
        {props.rate} {listItems}{' '}
      </p>
    </div>
  );
}
