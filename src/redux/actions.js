import { replace } from 'connected-react-router';

import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  LOAD_USERS,
  SUBMIT,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './constants';
import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  submitBodySelector,
  orderSubmittingSelector,
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

export const submitOrder = () => async (dispatch, getState) => {
  const state = getState();
  if (state.router.location.pathname !== '/checkout') return;

  const submitting = orderSubmittingSelector(state);

  if (submitting) return;

  const orderPayload = JSON.stringify(submitBodySelector(state));

  const failureHandler = () => {
    dispatch(replace('/error'));
    dispatch({ type: SUBMIT + FAILURE });
  };

  dispatch({ type: SUBMIT + REQUEST });
  try {
    await fetch(`/api/order`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: orderPayload,
    }).then((res) => {
      if (res.status >= 400 && res.status < 600) {
        failureHandler();
      } else {
        res.json();
        dispatch({ type: SUBMIT + SUCCESS });
        dispatch(replace('/submit/success'));
      }
    });
  } catch (error) {
    failureHandler();
  }
};
