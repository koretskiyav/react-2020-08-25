import React from 'react';

export default function Rate(props) {
  let count = (
    props.reviews.reduce((sum, current) => sum + current.rating, 0) /
    props.reviews.length
  ).toFixed(1);

  return (
    <div>
      <h1>Rate</h1>
      <h1 style={{ color: 'red' }}>{count}</h1>
    </div>
  );
}
