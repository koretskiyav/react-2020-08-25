import React from 'react';

import Rate from './rate';

export default function Reviews(props) {
  const allRevs = props.reviews;
  let ratingRevsSum = 0;
  let ratingResult = 0;
  const listItems = allRevs.map((rev) => (
    <div class="with-border">
      <p>
        <i>Name:</i> {rev.user}{' '}
      </p>
      <p>
        <i>Text:</i> {rev.text}{' '}
      </p>
      <div>
        <i>Rating:</i> <Rate rate={rev.rating} />{' '}
      </div>
      {(ratingRevsSum += rev.rating)}
    </div>
  ));
  ratingResult = Math.round(ratingRevsSum / allRevs.length);

  return (
    <div>
      <Rate rate={ratingResult} />
      {listItems}
    </div>
  );
}
