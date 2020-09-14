import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (false) {
    uuidv4();
  }
  next(action);
};
