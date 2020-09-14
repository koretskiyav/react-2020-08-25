import { normalizedRestaurants as defaultRestaurants } from '../../fixtures';
import { CREATE_REVIEW } from '../constants';

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case CREATE_REVIEW: {
      const newRestaurants = [...restaurants];
      const restaurant = newRestaurants.find(
        (item) => item.id === action.payload.restaurantId
      );
      restaurant.reviews = [...restaurant.reviews, action.newIds[0]];

      return newRestaurants;
    }

    default:
      return restaurants;
  }
};
