import React from 'react';
import Rate from './rate';

const Reviews = function({reviews}) {
return(
  <div className='reviews'>
    {reviews.map(review => (
      <div className='review' key={review.id}>
        <h3>{review.user}</h3>
        <p>{review.text}</p>
        <Rate rating={review.rating}/>
      </div>
    ))}
  </div>
)
}

export default Reviews;