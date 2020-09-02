import React from 'react';
import rate from '../hocs/rating';

function Rating(props) {
  const { positive, uncertain, negative, rating } = props;

  const hearts =
    '❤️'.repeat(positive) + '💛'.repeat(uncertain) + '🤍'.repeat(negative);

  return <div title={rating}>{hearts}</div>;
}

export default rate(Rating);
