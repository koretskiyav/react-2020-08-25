/* import { v4 as uuidv4 } from 'uuid'; */

export default (store) => (next) => (action) => {
  /* console.log('before: ', store.getState());
  console.log('action: ', action); */
  /* console.log(action, uuidv4()); */
  next(action);
  /* console.log('after: ', store.getState()); */
};
