import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_PRODUCTS,
  LOAD_USERS,
} from './constants';

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

export const loadProducts = (id) => ({
  type: LOAD_PRODUCTS,
  payload: { restaurantId: id },
  CallAPI: `/api/products?id=${id}`,
});

export const loadReviews = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST, payload: { id: restaurantId } });

  try {
    const response = await fetch(
      `/api/reviews?id=${restaurantId}`
    ).then((res) => res.json());
    await loadUsers(dispatch);
    dispatch({
      type: LOAD_REVIEWS + SUCCESS,
      response,
      payload: { id: restaurantId },
    });
  } catch (error) {
    dispatch({
      type: LOAD_REVIEWS + FAILURE,
      error,
      payload: { id: restaurantId },
    });
  }
};

const loadUsers = async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST });

  try {
    const response = await fetch(`/api/users`).then((res) => res.json());
    dispatch({ type: LOAD_USERS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};
