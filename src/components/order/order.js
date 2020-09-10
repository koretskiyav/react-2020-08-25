import React from 'react';
import styles from './order.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../redux/actions';

const Order = ({ product, amount, increment, decrement, remove }) => {
  return amount > 0 ? (
    <div className={styles.order} data-id="order">
      <button
        onClick={() => decrement(product.id, product.price)}
        data-id="order-decrement"
      >
        -
      </button>
      <div className={styles.amount} data-id="order-amount">
        {amount > 0 ? amount : 0}
      </div>
      <button
        onClick={() => increment(product.id, product.price)}
        data-id="order-increment"
      >
        +
      </button>
      <div className={styles.totalProduct}>{product.price * amount}$</div>
      <button onClick={() => remove(product.id)} data-id="order-remove">
        x
      </button>
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

Order.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remove: PropTypes.func,
};

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(Order);
