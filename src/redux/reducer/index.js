import { combineReducers } from 'redux';

import order from './order';
import restaurants from './restaurants';
import products from './products';
import reviews from './reviews';
import users from './users';
import onsubmit from './onsubmit';

export default combineReducers({
  order,
  restaurants,
  products,
  reviews,
  users,
  onsubmit,
});
