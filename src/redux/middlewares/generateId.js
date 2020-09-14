import { v4 as uuidv4 } from 'uuid';

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
