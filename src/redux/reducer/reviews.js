import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap, mergeObject } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_REVIEWS + SUCCESS:
      draft.entities = mergeObject(draft.entities, arrToMap(response));
      draft.loading = false;
      draft.loaded = true;
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
