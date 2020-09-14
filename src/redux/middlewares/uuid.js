import { SUBMIT } from '../constants';
import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.type === SUBMIT) {
    action.payload = {
      text: action.payload.text,
      userId: uuidv4(),
      id: uuidv4(),
      rating: action.payload.rate,
    };
  }
  next(action);
};
