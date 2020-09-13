import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({
    ...acc,
    [restaurant.id]: restaurant,
  }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW: {
      return {
        ...restaurants,
        [payload.restaurant.id]: {
          ...restaurants[payload.restaurant.id],
          reviews: [
            ...restaurants[payload.restaurant.id].reviews,
            action.reviewId,
          ],
        },
      };
    }
    default:
      return restaurants;
  }
};
