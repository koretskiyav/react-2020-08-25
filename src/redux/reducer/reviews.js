import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import produce from 'immer';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loaded: {},
  loading: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + SUCCESS:
      draft.loaded[payload.id] = true;
      draft.loading = false;
      draft.entities = arrToMap(response);
      break;
    case LOAD_REVIEWS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_REVIEWS + FAILURE:
      draft.loading = false;
      draft.error = error;
      break;
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});
