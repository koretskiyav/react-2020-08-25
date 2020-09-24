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
  REQUEST,
  SUCCESS,
  FAILURE,
  CHECKOUT,
  ERROR,
  CLEAR_BASKET,
} from './constants';
import {
  usersLoadingSelector,
  usersLoadedSelector,
  reviewsLoadingSelector,
  reviewsLoadedSelector,
  orderLoadedSelector,
  orderLoadingSelector,
  pathnameSelector,
  basketCheckoutSelector,
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

export const checkout = (payload) => async (dispatch, getState) => {
  const state = getState();
  const loading = orderLoadingSelector(state);
  const loaded = orderLoadedSelector(state);
  const pathname = pathnameSelector(state);
  const basket = basketCheckoutSelector(state);
  const isCheckoutPage = pathname === '/checkout';

  if (!isCheckoutPage || loading || loaded) return;
  dispatch({ type: CHECKOUT + REQUEST });
  try {
    const response = await fetch(`/api/order`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(basket),
    }).then((res) => res.json());
    if (response !== 'ok') {
      dispatch({ type: ERROR, payload: { error: response } });
      dispatch({ type: CHECKOUT + FAILURE, error: response });
      dispatch(replace('/error'));
    } else {
      dispatch({ type: CHECKOUT + SUCCESS, response });
      dispatch({ type: CLEAR_BASKET });
      dispatch(replace('/thanks'));
    }
  } catch (error) {
    dispatch({ type: CHECKOUT + FAILURE, error });
    dispatch(replace('/error'));
  }
};

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
