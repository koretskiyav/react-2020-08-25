import {
  ADD_REVIEW,
  FAILURE,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
} from '../constants';

import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  loadedReviewsByRestIdList: [],
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, userId, response, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_REVIEWS + SUCCESS:
      return {
        ...state,
        entities: { ...state.entities, ...arrToMap(response) },
        loading: false,
        loaded: true,
        loadedReviewsByRestIdList: [
          ...state.loadedReviewsByRestIdList,
          payload,
        ],
      };
    case LOAD_REVIEWS + FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    case ADD_REVIEW:
      const { text, rating } = payload.review;
      return {
        ...state,
        entities: {
          ...state.entities,
          [reviewId]: { id: reviewId, userId, text, rating },
        },
      };
    default:
      return state;
  }
};
