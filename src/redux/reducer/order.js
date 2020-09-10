import { DECREMENT, INCREMENT, DELETE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  let newState = { ...state };

  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      if (state[payload.id] <= 1 || !state[payload.id]) {
        delete newState[payload.id];
        return { ...newState };
      }
      return { ...state, [payload.id]: (state[payload.id] || 0) - 1 };
    case DELETE:
      delete newState[payload.id];
      return { ...newState };
    default:
      return state;
  }
};
