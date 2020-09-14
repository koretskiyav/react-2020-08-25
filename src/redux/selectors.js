import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
const reviewsSelector = (state) => state.reviews;
const getRestaurantById = (state, id) => state.restaurants[id];

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

const idReviewsByRestuarantSelector = createSelector(
  getRestaurantById,
  (restuarant) => restuarant.reviews
);

export const reviewByRestuarantSelector = createSelector(
  reviewsSelector,
  idReviewsByRestuarantSelector,
  (reviews, idReviews) => idReviews.map((id) => reviews[id])
);

export const getRestuarantWithReviews = createSelector(
  getRestaurantById,
  reviewByRestuarantSelector,
  (restaurants, reviews) => {
    return {
      ...restaurants,
      reviews,
    };
  }
);
