import React from 'react';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <ul style={{ margin: 0, listStyle: 'none' }}>
      {props.restaurant.reviews.map((review) => (
        <li
          key={review.id}
          style={{ display: 'flex', margin: 0, listStyle: 'none' }}
        >
          <Rate count={review.rating} />
          <p style={{ margin: 0, marginLeft: '16px' }}>{review.user}</p>
          <p style={{ margin: 0, marginLeft: '16px' }}>{review.text}</p>
        </li>
      ))}
    </ul>
  );
}
