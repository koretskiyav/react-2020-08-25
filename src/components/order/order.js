import React from 'react';
import styles from './order.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../redux/actions';

const Order = ({ product, amount, increment, decrement, remove }) => {
  return amount > 0 ? (
    <div className={styles.order}>
      <button onClick={() => decrement(product.id, product.price)}>-</button>
      <div className={styles.amount}>{amount > 0 ? amount : 0}</div>
      <button onClick={() => increment(product.id, product.price)}>+</button>
      <div className={styles.totalProduct}>{product.price * amount}$</div>

      <button onClick={() => remove(product.id)}>x</button>
    </div>
  ) : null;
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Order);
