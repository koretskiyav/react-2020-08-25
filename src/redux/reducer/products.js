import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';
import { arrToMap } from '../utils';
import produce from 'immer';

const initialState = {
  entities: {},
  loading: false,
  loaded: {},
  error: null,
};

// { [productId]: product }
export default produce((draft = initialState, action) => {
  const { type, response, payload, error } = action;
  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      draft.loading = true;
      break;
    case LOAD_PRODUCTS + FAILURE:
      draft.loading = false;
      draft.error = error;
      break;
    case LOAD_PRODUCTS + SUCCESS:
      draft.entities = { ...draft.entities, ...arrToMap(response) };
      draft.loaded[payload.restaurantId] = true;
      draft.loading = false;
      break;
    default:
      return draft;
  }
});
