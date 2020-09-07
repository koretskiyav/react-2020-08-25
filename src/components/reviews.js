import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div>
      {props.reviews.map((rate) => (
        <Rate key={rate.id} rate={rate} />
      ))}
    </div>
  );
}
