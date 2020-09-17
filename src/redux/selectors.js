import { createSelector } from 'reselect';
import { getAverage, getById, mapToArray } from './utils';

const restaurantsSelector = (state) => state.restaurants.entities;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products.entities;
const reviewsSelector = (state) => state.reviews.entities;
const usersSelector = (state) => state.users.entities;

export const restaurantsLoadingSelector = (state) => state.restaurants.loading;
export const restaurantsLoadedSelector = (state) => state.restaurants.loaded;

export const productsLoadingSelector = (state) => state.products.loading;
export const productsLoadedSelector = (state) => state.products.loaded;

export const reviewsLoadingSelector = (state) => state.reviews.loading;
export const reviewsLoadedSelector = (state) => state.reviews.loaded;

export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const loadedByRestaurant = (state) => state.products.loadedByRestaurant;

export const restaurantsListSelector = mapToArray(restaurantsSelector);
export const usersListSelector = mapToArray(usersSelector);
export const productAmountSelector = getById(orderSelector, 0);
export const productSelector = getById(productsSelector);
export const reviewsListSelector = mapToArray(reviewsSelector);

export const restaurantByIdSelector = getById(restaurantsSelector, 0);
export const reviewsByRestaurantSelector = createSelector(
  restaurantByIdSelector,
  reviewsListSelector,
  (restaurant, reviews) => {
    return reviews.filter((review) => restaurant.reviews.includes(review.id));
  }
);

export const reviewsWithUsersListSelector = createSelector(
  reviewsByRestaurantSelector,
  usersSelector,
  (reviews, users) => {
    if (!reviews.length) return [];
    return reviews.map((review) => ({
      ...review,
      user: users[review.userId].name,
    }));
  }
);

export const productsListByRestaurantelector = createSelector(
  restaurantByIdSelector,
  mapToArray(productsSelector),
  ({ menu }, products) => {
    return products.filter((product) => menu.includes(product.id));
  }
);

export const averageRatingSelector = createSelector(
  reviewsByRestaurantSelector,
  (reviews) => {
    if (!reviews.length) return 0;
    const ratings = reviews.map(({ rating }) => rating);
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
