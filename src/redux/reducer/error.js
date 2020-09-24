import { ERROR } from '../constants';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ERROR:
      return {
        ...state,
        message: payload.error,
      };
    default:
      return state;
  }
};
