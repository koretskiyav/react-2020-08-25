import {
  INCREMENT,
  DECREMENT,
  REMOVE,
  ADD_REVIEW,
  LOAD_RESTAURANTS,
  LOAD_REVIEWS,
  LOAD_PRODUCTS,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_STATE_PRODUCTS,
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

export const loadReviews = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_REVIEWS + REQUEST });

  try {
    const response = await fetch(
      `/api/reviews?id=${restaurantId}`
    ).then((res) => res.json());
    dispatch({ type: LOAD_REVIEWS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_REVIEWS + FAILURE, error });
  }
};

export const loadProducts = (restaurantId) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS + REQUEST });

  try {
    const response = await fetch(
      `/api/products?id=${restaurantId}`
    ).then((res) => res.json());
    dispatch({ type: LOAD_PRODUCTS + SUCCESS, response });
  } catch (error) {
    dispatch({ type: LOAD_PRODUCTS + FAILURE, error });
  }
};
export const loadAllProducts = (menuRestaurant) => async (dispatch) => {
  dispatch({ type: LOAD_PRODUCTS + REQUEST });

  try {
    const response = await fetch(`/api/products`).then((res) => res.json());
    dispatch({ type: LOAD_PRODUCTS + SUCCESS, response });

    const dataMenu = loadRestaurantProducts(menuRestaurant, response);
    dataMenu(dispatch);
  } catch (error) {
    dispatch({ type: LOAD_PRODUCTS + FAILURE, error });
  }
};

export const loadRestaurantProducts = (menuRestaurant, allProducts) => async (
  dispatch
) => {
  try {
    const cacheProducts = menuRestaurant.reduce((acc, menuProduct) => {
      const results = { ...acc };

      results[menuProduct] = allProducts.find((product) => {
        return menuProduct === product.id;
      });
      return results;
    }, {});

    dispatch({ type: LOAD_STATE_PRODUCTS + SUCCESS, response: cacheProducts });
  } catch (error) {
    dispatch({ type: LOAD_STATE_PRODUCTS + FAILURE, error });
  }
};

// export const loadProducts = () => ({
//   type: LOAD_PRODUCTS,
//   CallAPI: `/api/products?id=${restaurantId}`,
// });

// export const loadUsers = () => async (dispatch) => {
//   dispatch({ type: LOAD_USERS + REQUEST });

//   try {
//     const response = await fetch(
//       `/api/users`
//     ).then((res) => res.json());
//     dispatch({ type: LOAD_USERS + SUCCESS, response });
//   } catch (error) {
//     dispatch({ type: LOAD_USERS + FAILURE, error });
//   }
// };
