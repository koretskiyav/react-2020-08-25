import { useMemo } from 'react';

const useRating = (restaurant) => {
  const average = useMemo(() => {
    const { reviews } = restaurant;
    if (!reviews) {
      return 0;
    }
    return Math.floor(
      reviews.reduce((a, b) => a.rating + b.rating) / reviews.length
    );
  }, [restaurant.reviews]);

  return average;
};

export default useRating;
