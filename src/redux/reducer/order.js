import { CLEAR, DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      return {
        ...state,
        [payload.id]: Math.max(0, (state[payload.id] || 0) - 1),
      };
    case CLEAR:
      let newState = { ...state };
      delete newState[payload.id];
      return newState;
    default:
      return state;
  }
};
