import produce from 'immer';
import {
  ADD_REVIEW,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  loading: {},
  loaded: {},
  error: null,
  entities: {},
};

export default produce((draft = initialState, action) => {
  const { type, payload, userId, id, response, reviewId } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST: {
      draft.error = null;
      draft.loading[id] = true;
      break;
    }
    case LOAD_REVIEWS + SUCCESS: {
      draft.loading[id] = false;
      draft.loaded[id] = true;
      draft.entities = { ...draft.entities, ...arrToMap(response) };
      break;
    }
    case LOAD_REVIEWS + FAILURE: {
      draft.loading[id] = false;
      draft.loaded[id] = false;
      draft.error = action.error;
      break;
    }
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      draft.entities[reviewId] = { id: reviewId, userId, text, rating };
      break;
    default:
      return draft;
  }
});
