import React, { useMemo } from 'react';
import useAverageRating from '../hooks/use-average-rating';

export default (WrappedComponent) => ({ restaurant }) => {
  const averageRating = useMemo(() => useAverageRating(restaurant.reviews), [
    restaurant.reviews,
  ]);

  return (
    <WrappedComponent restaurant={restaurant} averageRating={averageRating} />
  );
};
