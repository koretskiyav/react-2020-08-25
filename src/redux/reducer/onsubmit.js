import { ONSUBMIT } from './constants';

export default (state = {}, action) => {
  const { type, payload } = action;
  switch (type) {
    case ONSUBMIT:
      return {
        ...state,
        [payload.values]: state[payload.values] + values,
      };

    default:
      return state;
  }
};
