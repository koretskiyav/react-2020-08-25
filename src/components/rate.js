import React from 'react';
import rate from '../hocs/rating';

function Rating({ positive, uncertain, negative, rating }) {
  const hearts =
    '❤️'.repeat(positive) + '💛'.repeat(uncertain) + '🤍'.repeat(negative);

  return <div title={rating}>{hearts}</div>;
}

export default rate(Rating);
