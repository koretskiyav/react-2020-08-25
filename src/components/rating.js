import React from 'react';

export default function Rating(props) {
  const rating = '*'.repeat(props.rating);
  return <div>{rating}</div>;
}
