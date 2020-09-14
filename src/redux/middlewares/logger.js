import { v4 as uuidv4 } from 'uuid';
import { ADDREVIEW } from '../constants';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export default (store) => (next) => (action) => {
  if (action.type == ADDREVIEW) {
    action = {
      ...action,
      review: { ...action.review, id: uuidv4(), userId: uuidv4() },
    };
  }
  next(action);
  console.log('after: ', store.getState());
};
