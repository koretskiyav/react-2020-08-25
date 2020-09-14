import { SUBMIT } from '../constants';

export default (store) => (next) => (action) => {
  if (action.type === SUBMIT) {
    action.payload = { ...action.payload, id: 'new' };
  }
  next(action);
};
