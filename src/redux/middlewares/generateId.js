import { v4 as uuidv4 } from 'uuid';

/* export default (store) => (next) => (action) => {
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
}; */

export default function (nameField, ...forType) {
  return (store) => (next) => (action) => {
    if (forType && forType.includes(action.type)) {
      next({
        ...action,
        [nameField]: uuidv4(),
      });
    } else {
      next(action);
    }
  };
}
