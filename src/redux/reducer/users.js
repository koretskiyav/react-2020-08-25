import produce from 'immer';
import { ADD_REVIEW, LOAD_USERS, SUCCESS } from '../constants';
import { arrToMap } from '../utils';

export default produce((draft = {}, action) => {
  const { type, payload, userId, response } = action;

  switch (type) {
    case LOAD_USERS + SUCCESS:
      return { ...draft, ...arrToMap(response) };
    case ADD_REVIEW:
      const { name } = payload.review;
      draft[userId] = { id: userId, name };
      break;
    default:
      return draft;
  }
});
