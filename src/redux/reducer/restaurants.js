import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_RESTAURANTS,
  REQUEST,
  SELECT_RESTAURANT,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  selectedRestaurantId: null,
};

export default (state = initialState, action) => {
  const { type, payload, reviewId, response, error } = action;

  switch (type) {
    case SELECT_RESTAURANT:
      return produce(state, (draft) => {
        draft.selectedRestaurantId = payload;
      });
    case LOAD_RESTAURANTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_RESTAURANTS + SUCCESS:
      return {
        ...state,
        entities: arrToMap(response),
        selectedRestaurantId: response[0].id,
        loading: false,
        loaded: true,
      };
    case LOAD_RESTAURANTS + FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[payload.restaurantId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};
