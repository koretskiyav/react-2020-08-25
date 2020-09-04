import React from 'react';

export default function AverageRating(reviews) {
  const reviewRate = reviews.map((rate) => rate.rating);
  return (
    reviewRate.reduce((prevNum, nextNum) => prevNum + nextNum) /
    reviewRate.length
  );
}
