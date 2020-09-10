import { restaurants } from '../../fixtures';
import { SET_ACTIVE_RESTAURANT } from '../constants';

const initState = {
  activeRestaurantId: restaurants[0].id,
  activeRestaurant: restaurants[0],
  restaurants,
};

export default (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_ACTIVE_RESTAURANT:
      return {
        ...state,
        activeRestaurantId: payload.activeRestaurantId,
        activeRestaurant: state.restaurants.find(
          ({ id }) => id === payload.activeRestaurantId
        ),
      };
    default:
      return state;
  }
};
