import produce from 'immer';
import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default produce((draft = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      draft[payload.id] = (draft[payload.id] || 0) + 1;
      break;
    case DECREMENT:
      draft[payload.id] = Math.max((draft[payload.id] || 0) - 1, 0);
      break;
    case REMOVE:
      draft[payload.id] = 0;
      break;
    default:
      return draft;
  }
});
