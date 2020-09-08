import { combineReducers } from 'redux';
import orderReducer from './order';

export default combineReducers({
  foo: () => 'bar',
  order: orderReducer,
});
