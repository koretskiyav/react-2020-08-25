import { INCREMENT, DECREMENT, REMOVE, ONSUBMIT } from './constants';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const onSubmit = (values) => ({ type: ONSUBMIT, payload: { values } });
//--
