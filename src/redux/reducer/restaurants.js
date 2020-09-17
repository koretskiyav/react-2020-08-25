import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, response, error } = action;

  switch (type) {
    case LOAD_RESTAURANTS + REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.loaded = null;
      });

    case LOAD_RESTAURANTS + SUCCESS:
      return produce(state, (draft) => {
        draft.entities = arrToMap(response);
        draft.loading = false;
        draft.loaded = true;
      });
    case LOAD_RESTAURANTS + FAILURE:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = error;
      });
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};
