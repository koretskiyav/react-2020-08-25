import { SUBMIT } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === SUBMIT) {
    const userId = uuidv4();
    const reviewId = uuidv4();

    action.payload = {
      ...action.payload,
      userId: userId,
      id: reviewId,
    };
  }
  next(action);
};
