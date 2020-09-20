import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: {
          value: (state[payload.id]?.value || 0) + 1,
          restaurantId: payload.restaurantId,
        },
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: {
          value: Math.max((state[payload.id]?.value || 0) - 1, 0),
          restaurantId: payload.restaurantId,
        },
      };
    case REMOVE:
      return {
        ...state,
        [payload.id]: 0,
      };
    default:
      return state;
  }
};
