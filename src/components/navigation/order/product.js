import React from 'react';
import styles from './product.module.css';
import { increment, decrement, remove } from '../../../redux/actions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Product = ({ product, increment, decrement, remove }) => {
  const { id, name, price, count } = product;
  return (
    <div className={styles.product}>
      <div></div>
      <div className={styles['restauran-product']}>{name}</div>
      <div className={styles['restauran-price']}>{price}</div>
      <div className={styles['restauran-count']}>{count}</div>
      <div className={styles['restauran-common-count']}>{price + count}</div>
      <div onClick={() => increment(id)}>+</div>
      <div onClick={() => decrement(id)}>-</div>
      <div onClick={() => remove(id)}>х</div>
    </div>
  );
};

const reduxPropTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    count: PropTypes.number.isRequired,
  }).isRequired,
  ...reduxPropTypes,
};

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(null, mapDispatchToProps)(Product);
