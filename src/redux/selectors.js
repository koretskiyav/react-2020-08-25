import { createSelector } from 'reselect';
import { getAverage, getById, mapToArray } from './utils';

export const restaurantsSelector = (state) => state.restaurants.entities;
export const orderSelector = (state) => state.order;
export const productsSelector = (state) => state.products;
export const reviewsSelector = (state) => state.reviews;
export const usersSelector = (state) => state.users;

export const selectUsersLoading = (state) => usersSelector(state).loading;
export const selectUsersLoaded = (state) => usersSelector(state).loaded;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const selectProductsLoading = (state) => productsSelector(state).loading;
export const selectProductsLoaded = (state) => productsSelector(state).loaded;

export const restaurantsListSelector = mapToArray(restaurantsSelector);
export const productAmountSelector = getById(orderSelector, 0);
export const productSelector = getById(productsSelector);
const reviewSelector = getById(reviewsSelector);

export const reviewWitUserSelector = createSelector(
  reviewSelector,
  usersSelector,
  (review, users) => ({
    ...review,
    user: users[review.userId]?.name,
  })
);

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (_, { reviews }) => reviews,
  (reviews, ids) => {
    const ratings = ids.map((id) => reviews[id].rating);
    return Math.round(getAverage(ratings));
  }
);

export const orderProductsSelector = createSelector(
  productsSelector,
  orderSelector,
  (products, order) => {
    return Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }));
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
