//import { normalizedProducts } from '../../fixtures';
import { arrToMap } from '../utils';
import { LOAD_PRODUCTS } from '../constants';

// { [productId]: product }
export default (state = {} /* arrToMap(normalizedProducts) */, action) => {
  const { type, response } = action;

  switch (type) {
    case LOAD_PRODUCTS:
      return arrToMap(response);
    default:
      return state;
  }
};
