import React from 'react';

const Rate = function({ rating }) {
  const isValidRating = rating && (rating > 0 && rating <= 5);
  return (
    isValidRating && (<p className='rating'>Rating: {rating}</p>)
  )
}
export default Rate;
