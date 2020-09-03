import React from 'react';
import Menu from './menu';
import Review from './reviews';
import Rate from './rate';

export default function Restaurant(props) {
  const { name, menu, reviews } = props.restaurant;

  function getAverage(reviews) {
    const sum = reviews.reduce(function (accumulator, currentValue) {
      return accumulator + currentValue.rating;
    }, 0);

    return sum / reviews.length;
  }

  return (
    <div>
      <h1>{name}</h1>
      <Menu menu={menu} />
      <Rate rate={getAverage(reviews)} />
      <h3>Reviews from users: </h3>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
