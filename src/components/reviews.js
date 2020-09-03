import React from 'react';
import Review from './review';
import Rate from './rate';

export default function Reviews(props) {
  const {reviews} = props; 
  const averageRate = reviews.reduce((accumulator, cur) => accumulator + cur.rating, 0)/reviews.length;

  return (
    <div style={{float: 'left'}}>
      <h2>Reviews: </h2>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <h2>Average rating:</h2>
      <Rate rate={averageRate.toFixed(2)}/>
    </div>
  );
}