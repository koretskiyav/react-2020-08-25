import { ADDREVIEW } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  console.log('Add Review ');

  if (action.type === ADDREVIEW) {
    action.payload.values.userId = uuidv4();
    action.payload.values.reviewId = uuidv4();

    console.log('action: ', action);
  }
  next(action);
};
