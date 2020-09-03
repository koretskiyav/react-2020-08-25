import React from 'react';

export default function AverageRating(props) {
  const avgRating = (
    props.reviews.reduce((total, next) => total + next.rating, 0) /
    props.reviews.length
  ).toFixed(1);

  return <div>Average Rating: {avgRating}</div>;
}
