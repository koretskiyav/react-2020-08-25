import { useMemo } from 'react';

const useRating = (restaurant) => {
  const average = useMemo(() => {
    const { reviews } = restaurant;
    if (!reviews) {
      return 0;
    }
    return Math.floor(
      reviews.reduce((sum, a) => sum + a.rating, 0) / reviews.length
    );
  }, [restaurant.reviews]);

  return average;
};

export default useRating;
