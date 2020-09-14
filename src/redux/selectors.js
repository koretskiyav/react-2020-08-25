import { createSelector } from 'reselect';

export const orderSelector = (state) => state.order;
export const productsSelector = (state) => state.products;
export const reviewsSelector = (state) => state.reviews;
export const usersSelector = (state) => state.users;
export const userSelectorByName = (state, ownProps) =>
  Object.values(usersSelector(state)).find(
    (user) => user.name === ownProps.name
  );
export const reviewSelector = (state, ownProps) =>
  reviewsSelector(state)[ownProps.id];
export const idSelector = (state, ownProps) => ownProps.id;

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

export const averageRatingSelector = createSelector(
  reviewsSelector,
  (reviews) => {
    const reviewsArr = Object.values(reviews);
    const totalRating = reviewsArr.reduce((acc, current) => {
      return acc + current.rating;
    }, 0);
    return totalRating / reviewsArr.length;
  }
);

export const totalSelector = createSelector(
  orderProductsSelector,
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);
