import produce from 'immer';
import {
  DECREMENT,
  FAILURE,
  INCREMENT,
  REMOVE,
  REQUEST,
  SUBMIT,
  SUCCESS,
} from '../constants';

const INITIAL_STATE = {
  entities: {},
  submitting: false,
  error: null,
};
// { [productId]: amount }
export default produce((draft = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case INCREMENT:
      draft.entities = {
        ...draft.entities,
        [payload.id]: (draft.entities[payload.id] || 0) + 1,
      };
      break;
    case DECREMENT:
      draft.entities = {
        ...draft.entities,
        [payload.id]: Math.max((draft.entities[payload.id] || 0) - 1, 0),
      };
      break;
    case REMOVE:
      draft.entities = {
        [payload.id]: 0,
      };
      break;

    case SUBMIT + REQUEST:
      draft.submitting = true;
      break;

    case SUBMIT + SUCCESS:
      draft.submitting = false;
      draft.entities = {};
      break;

    case SUBMIT + FAILURE:
      draft.submitting = false;
      break;
    default:
      return draft;
  }
});
