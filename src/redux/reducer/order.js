import { DECREMENT, INCREMENT, REMOVE, ERROR_REQUEST } from '../constants';

// { [productId]: amount }
export default (state = { error: 'Error Page' }, action) => {
  const { type, payload, response } = action;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        [payload.id]: (state[payload.id] || 0) + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: Math.max((state[payload.id] || 0) - 1, 0),
      };
    case REMOVE:
      return {
        ...state,
        [payload.id]: 0,
      };
    case ERROR_REQUEST:
      return {
        ...state,
        error: response,
      };
    default:
      return state;
  }
};
