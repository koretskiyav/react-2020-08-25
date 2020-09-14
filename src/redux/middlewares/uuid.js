import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default () => (next) => (action) => {
  if (action.type === ADD_REVIEW) {
    const userId = uuidv4();
    const reviewId = uuidv4();

    action.payload = {
      ...action.payload,
      userId,
      reviewId,
    };
  }
  next(action);
};
