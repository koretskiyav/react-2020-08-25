import { normalizedRestaurants } from '../../fixtures';
import { SUBMIT } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, payload } = action;

  switch (type) {
    case SUBMIT:
      return {
        ...restaurants,
        [payload.restaurant]: {
          ...restaurants[payload.restaurant],
          reviews: [...restaurants[payload.restaurant].reviews, payload.id],
        },
      };
      break;
    default:
      return restaurants;
  }
};
