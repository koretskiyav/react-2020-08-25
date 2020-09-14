import { INCREMENT, DECREMENT, REMOVE, ADD_REVIEW } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const addReview = (restaurantId, { name, text, rate }) => ({
  type: ADD_REVIEW,
  payload: {
    restaurant: {
      id: restaurantId,
    },
    user: {
      name,
    },
    review: {
      text,
      rate,
    },
  },
});
