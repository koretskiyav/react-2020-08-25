import { v4 as uuidv4 } from 'uuid';

export default (store) => (next) => (action) => {
  if (action.needNewIds) {
    action.newIds = [];
    for (let i = 0; i < action.needNewIds; i++) {
      action.newIds.push(uuidv4());
    }
  }

  next(action);
};
