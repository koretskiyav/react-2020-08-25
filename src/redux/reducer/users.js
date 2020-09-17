import produce from 'immer';
import {
  ADD_REVIEW,
  FAILURE,
  LOAD_USERS,
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

// export default produce((draft = arrToMap(normalizedUsers), action) => {
//   const { type, payload, userId } = action;
//
//   switch (type) {
//     case ADD_REVIEW:
//       const { name } = payload.review;
//       draft[userId] = { id: userId, name };
//       break;
//     default:
//       return draft;
//   }
// });

export default produce((draft = initialState, action) => {
  const { state, draft } = action;
  switch (action.type) {
    case ADD_REVIEW: {
      if (!draft.entities[action.userId]) {
        draft.entities[action.userId] = {
          id: action.userId,
          name: action.payload.userId,
        };
      }
      break;
    }
    case LOAD_USERS + REQUEST: {
      draft.loading = true;
      break;
    }
    case LOAD_USERS + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      draft.error = null;
      draft.entities = {
        ...draft.entities,
        ...arrToMap(action.response),
      };
      break;
    }
    case LOAD_USERS + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = action.error;
      break;
    }
    default:
      return state;
  }
});
