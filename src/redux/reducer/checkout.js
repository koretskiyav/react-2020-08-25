import { PURCHASE_GOODS } from '../constants';

export default (state, action) => {
  const { type } = action;
  switch (type) {
    case PURCHASE_GOODS:
      return {
        state,
      };
    default:
      return state;
  }
};
