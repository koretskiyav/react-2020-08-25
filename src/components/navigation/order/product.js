import React from 'react';
/* import PropTypes from 'prop-types'; */
import styles from './product.module.css';
/* import { connect } from 'react-redux'; */

const Product = ({ product }) => {
  const { name, price, count } = product;
  return (
    <div className={styles.product}>
      <div></div>
      <div className={styles['restauran-product']}>{name}</div>
      <div className={styles['restauran-price']}>{price}</div>
      <div className={styles['restauran-count']}>{count}</div>
      <div className={styles['restauran-common-count']}>{price + count}</div>
    </div>
  );
};

/* Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRestaurantClick: PropTypes.func.isRequired,
}; */

/* const mapStateToProps = (state) => ({
  order: state.order,
  restaurants: state.restaurants.restaurants,
}); */

export default Product; //connect(mapStateToProps)();
