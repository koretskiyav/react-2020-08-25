import { INCREMENT, DECREMENT, REMOVE } from './constants';

export const increment = (id, price) => ({
  type: INCREMENT,
  payload: { id, price },
});
export const decrement = (id, price) => ({
  type: DECREMENT,
  payload: { id, price },
});
export const remove = (id) => ({ type: REMOVE, payload: { id } });
// export const total = () => ({ type: TOTAL });
