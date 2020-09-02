import React from 'react';
import useRating from '../hooks/use-rating';

export default (WrappedComponent) => (props) => {
  const ratingProps = useRating(props.rating);

  return <WrappedComponent {...props} {...ratingProps} />;
};
