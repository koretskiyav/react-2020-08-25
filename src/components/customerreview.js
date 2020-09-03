import React from 'react';

import Rate from './rate';

export default function CustomerReview(props) {
  return (
    <div>
      <p>Name: {props.customerReview.user}</p>
      <p>Comment: {props.customerReview.text}</p>
      <Rate rating={props.customerReview.rating} />
      <p>-----</p>
    </div>
  );
}
