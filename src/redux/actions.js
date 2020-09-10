import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  SET_ACTIVE_RESTAURANT,
} from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const setActiveRestaurant = (activeRestaurantId) => ({
  type: SET_ACTIVE_RESTAURANT,
  payload: {
    activeRestaurantId,
  },
});
