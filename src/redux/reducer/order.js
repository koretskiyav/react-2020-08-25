import produce from 'immer';
import {
  DECREMENT,
  FAILURE,
  INCREMENT,
  REMOVE,
  REQUEST,
  SUBMIT_ORDER,
  SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  error: null,
  entities: {},
};

// { [productId]: amount }
export default (state = initialState, action) =>
  produce(state, (draft) => {
    const { type, payload, error } = action;
    switch (type) {
      case INCREMENT:
        draft.entities[payload.id] = (draft.entities[payload.id] || 0) + 1;
        break;
      case DECREMENT:
        draft.entities[payload.id] = Math.max(
          (draft.entities[payload.id] || 0) - 1,
          0
        );
        break;
      case REMOVE:
        draft.entities[payload.id] = 0;
        break;
      case SUBMIT_ORDER + REQUEST: {
        draft.loading = true;
        break;
      }
      case SUBMIT_ORDER + SUCCESS: {
        draft.loading = false;
        draft.error = null;
        draft.entities = {};
        break;
      }
      case SUBMIT_ORDER + FAILURE: {
        draft.loading = false;
        draft.error = error;
        break;
      }
      default:
        return;
    }
  });
