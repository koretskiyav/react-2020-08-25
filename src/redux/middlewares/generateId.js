import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  const { type } = action;
  switch (type) {
    case ADD_REVIEW: {
      action.payload.user.id = uuidv4();
      action.payload.review.id = uuidv4();
      next(action);
      break;
    }
    default:
      next(action);
  }
};
