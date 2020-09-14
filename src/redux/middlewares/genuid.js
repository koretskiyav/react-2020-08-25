import { v4 as uuidv4 } from 'uuid';

//uuidv4(); //  '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

export default (store) => (next) => (action) => {
  let NewValue = store.getState();
  NewValue.id = uuidv4();
  next(action);
};

/* console.log('before: ', store.getState());
console.log('action: ', action);
next(action);
console.log('after: ', store.getState()); */
