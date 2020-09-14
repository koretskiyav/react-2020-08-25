import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, rest) => ({
    ...acc,
    [rest.id]: rest,
  }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const { activeRestaurantId, reviewId } = payload;

      return {
        ...restaurants,
        [activeRestaurantId]: {
          ...restaurants[activeRestaurantId],
          reviews: [...restaurants[activeRestaurantId].reviews, reviewId],
        },
      };
    default:
      return restaurants;
  }
};
