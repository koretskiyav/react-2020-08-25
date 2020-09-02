import React from 'react';
import useAverageRating from '../hooks/use-average-rating';

export default (WrappedComponent) => (props) => {
  const averageRating = useAverageRating(props.restaurant.reviews);

  return <WrappedComponent {...props} averageRating={averageRating} />;
};
