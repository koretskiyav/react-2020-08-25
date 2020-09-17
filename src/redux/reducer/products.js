import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
  loadedProductsByRestIdList: [],
};

export default (state = initialState, action) => {
  const { type, payload, response, error } = action;

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
        entities: { ...state.entities, ...arrToMap(response) },
        loading: false,
        loaded: true,
        loadedProductsByRestIdList: [
          ...state.loadedProductsByRestIdList,
          payload,
        ],
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
