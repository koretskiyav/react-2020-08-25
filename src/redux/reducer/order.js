import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [payload.id]: (state[payload.id] || 0) + 1 };
    case DECREMENT: {
      if (state[payload.id] > 0) {
        const count = (state[payload.id] || 0) - 1;
        if (count > 0) {
          return { ...state, [payload.id]: count };
        }
        const { [payload.id]: removeOrder, ...stateWithOutOrder } = state;
        return stateWithOutOrder;
      }
      return { ...state };
    }
    case REMOVE: {
      const { [payload.id]: removeOrder, ...stateWithOutOrder } = state;
      return stateWithOutOrder;
    }
    default:
      return state;
  }
};
