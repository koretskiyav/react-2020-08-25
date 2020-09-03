import React from 'react';
import Review from './review';
import Rate from './rate';

export default function Reviews(props) {
  return (
    <div
      style={{
        textAlign: 'center',
        flexBasis: '50%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <div>
        <p>Reviews</p>
        {props.reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
      <div>
        <Rate reviews={props.reviews} />
      </div>
    </div>
  );
}
