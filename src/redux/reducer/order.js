import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      let value = (state[payload.id] || 0) - 1;

      return { ...state, [payload.id]: value > 0 ? value : 0 };
    case REMOVE:
      return { ...state, [payload.id]: 0 };
    default:
      return state;
  }
};
