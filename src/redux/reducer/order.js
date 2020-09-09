import { DECREMENT, INCREMENT, REMOVE } from '../constants';

const remove = (state, removalId) => {
  let newState = {};
  Object.keys(state).forEach((id) => {
    if (id !== removalId) {
      newState[id] = state[id];
    }
  });
  return newState;
};

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT:
      const decrementedVal = (state[payload.id] || 0) - 1;
      if (decrementedVal > 0) {
        return { ...state, [payload.id]: decrementedVal };
      } else {
        // Remove product from order if selected amount is 0.
        return remove(state, payload.id);
      }
    case REMOVE:
      return remove(state, payload.id);

    default:
      return state;
  }
};
