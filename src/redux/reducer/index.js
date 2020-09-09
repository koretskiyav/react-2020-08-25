import { combineReducers } from 'redux';
import orderReducer from './order';
import restaurantsReducer from './restaurants';

export default combineReducers({
  foo: () => 'bar',
  order: orderReducer,
  restaurants: restaurantsReducer,
});
