import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const orderSelector = (state) => state.order;
const productsSelector = (state) => state.products;
//const reviewsSelector = (state) => state.reviews;

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

// export const averageRatingSelector = createSelector(
//   reviewsSelector,
//   (reviews) => {
//     let ratings = Object.entries(reviews).map(el => el[1].rating);
//     let avg = ratings.reduce((a, c) => a + c) / ratings.length;
//     return avg;
//   }
// );
