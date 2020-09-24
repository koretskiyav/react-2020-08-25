import { CHECKOUT, FAILURE, REQUEST, SUCCESS } from '../constants';

export default (state = {}, action) => {
  const { type, error, response } = action;
  switch (type) {
    case CHECKOUT + REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case CHECKOUT + SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        response,
      };
    case CHECKOUT + FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };
    default:
      return state;
  }
};
