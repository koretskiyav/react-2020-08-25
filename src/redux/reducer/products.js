import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap, mergeObject } from '../utils';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  loadedByRestaurant: [],
};

// { [productId]: product }
export default (state = initialState, action) => {
  const { type, response, error, restaurantId } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        entities: mergeObject(state.entities, arrToMap(response)),
        loading: false,
        loaded: true,
        loadedByRestaurant: [...state.loadedByRestaurant, restaurantId],
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: false,
        error,
      };
    default:
      return state;
  }
};
