import { normalizedRestaurants } from '../../fixtures';
import { ADDREVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type } = action;

  switch (type) {
    case ADDREVIEW:
      let { restId, id } = action.review;

      return {
        ...restaurants,
        [restId]: {
          ...restaurants[restId],
          reviews: [...restaurants[restId].reviews, id],
        },
      };
    default:
      return restaurants;
  }
};
