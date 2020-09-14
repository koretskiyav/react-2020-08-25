import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      const { restaurantUid, reviewUid } = payload;
      const restaurant = restaurants[restaurantUid];

      restaurant.reviews.unshift(reviewUid);

      return { [restaurant.id]: restaurant, ...restaurants };
    default:
      return restaurants;
  }
};
