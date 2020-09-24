import produce from 'immer';
import { REQUEST, SUCCESS, FAILURE, LOAD_BASKET } from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type } = action;

  switch (type) {
    case LOAD_BASKET + REQUEST: {
      draft.error = null;
      draft.loading = true;
      break;
    }
    case LOAD_BASKET + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      break;
    }
    case LOAD_BASKET + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = action.error;
      break;
    }
    default:
      return draft;
  }
});
