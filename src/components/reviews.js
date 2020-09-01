import React from 'react';
import Rate from './rate';

export default function Reviews({ reviews }) {
  return (
    <>
      {reviews.map(({ id, user, text, rating }) => (
        <div key={id} style={{ marginTop: '5px' }}>
          <div>{user}</div>
          <div style={{ paddingLeft: '5px' }}>{text}</div>
          <Rate text="Рейтинг" rating={rating} />
        </div>
      ))}
    </>
  );
}
