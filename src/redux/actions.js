import { replace, push } from 'connected-react-router';

import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_BASKET,
} from './constants';
import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  basketLoadingSelector,
  basketLoadedSelector,
} from './selectors';

export const increment = (id) => ({ type: INCREMENT, payload: { id } });
export const decrement = (id) => ({ type: DECREMENT, payload: { id } });
export const remove = (id) => ({ type: REMOVE, payload: { id } });

export const addReview = (review, restaurantId) => ({
  type: ADD_REVIEW,
  payload: { review, restaurantId },
  generateId: ['reviewId', 'userId'],
});

export const loadRestaurants = () => ({
  type: LOAD_RESTAURANTS,
  CallAPI: '/api/restaurants',
});

export const loadProducts = (restaurantId) => ({
  type: LOAD_PRODUCTS,
  CallAPI: `/api/products?id=${restaurantId}`,
  restaurantId,
});
export const loadBasket = (orderProducts) => async (dispatch, getState) => {
  const state = getState();
  const loading = basketLoadingSelector(state);
  const loaded = basketLoadedSelector(state);

  if (loading || loaded) return;

  dispatch({ type: LOAD_BASKET + REQUEST });
  const order = orderProducts.map((product) => ({
    id: product.product.id,
    amount: product.amount,
  }));
  try {
    const response = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    }).then((res) => res.json());
    console.log(response);
    if (response !== 'ok') {
      throw new Error(response); // (*)
    }
    dispatch({ type: LOAD_BASKET + SUCCESS });
    dispatch(replace('/thankfulpage'));
  } catch (error) {
    dispatch({ type: LOAD_BASKET + FAILURE, error: error.message });
    dispatch(push('/error'));
  }
};

export const loadReviews = (restaurantId) => async (dispatch, getState) => {
  const state = getState();
  const loading = reviewsLoadingSelector(state, { restaurantId });
  const loaded = reviewsLoadedSelector(state, { restaurantId });

  if (loading || loaded) return;
  dispatch({ type: LOAD_REVIEWS + REQUEST, restaurantId });
  try {
    const response = await fetch(
      `/api/reviews?id=${restaurantId}`
    ).then((res) => res.json());
    dispatch({ type: LOAD_REVIEWS + SUCCESS, response, restaurantId });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, error, restaurantId });
    dispatch(replace('/error'));
  }
};

export const loadUsers = (restaurantId) => async (dispatch, getState) => {
  const state = getState();
  const loading = usersLoadingSelector(state);
  const loaded = usersLoadedSelector(state);

  if (loading || loaded) return;

  dispatch({ type: LOAD_USERS, CallAPI: '/api/users' });
};
