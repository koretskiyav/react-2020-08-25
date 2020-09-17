import produce from 'immer';
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
export default produce((draft = initialState, action) => {
  const { type, response, error, restaurantId } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loading = true;
      draft.error = null;
      break;
    case LOAD_PRODUCTS + SUCCESS:
      draft.entities = mergeObject(draft.entities, arrToMap(response));
      draft.loading = false;
      draft.loaded = true;
      draft.loadedByRestaurant.push(restaurantId);
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.loading = false;
      draft.error = error;
      break;
    default:
      return draft;
  }
});
