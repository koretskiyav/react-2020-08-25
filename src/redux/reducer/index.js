import { combineReducers } from 'redux';
import orderReducer from './order';
import menuReducer from './menu';

export default combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  menu: menuReducer,
});
