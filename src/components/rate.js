import React from 'react';
import rate from '../hocs/rating';

function Rating(props) {
  const { positive, uncertain, negative } = props;

  const hearts =
    '❤️'.repeat(positive) + '💛'.repeat(uncertain) + '🤍'.repeat(negative);

  return <div>{hearts}</div>;
}

export default rate(Rating);
