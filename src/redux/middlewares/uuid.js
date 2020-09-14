import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_REVIEW:
      next({
        ...action,
        payload: { ...payload, userUid: uuidv4(), reviewUid: uuidv4() },
      });
      break;
    default:
      next(action);
  }
};
