import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement, clear } from '../../redux/actions';

import styles from './orderline.module.css';

const OrderLine = ({
  id,
  name,
  price,
  restaurantName,
  qty,
  total,
  increment,
  decrement,
  clear,
}) => {
  return (
    <div className={styles.rTableRow}>
      <div className={styles.rTableCell}>{name}</div>
      <div className={styles.rTableCell}>{restaurantName}</div>
      <div className={styles.rTableCellCenter}>{qty}</div>
      <div className={styles.rTableCellCenter}>&#36;{price}</div>
      <div className={styles.rTableCellCenter}>&#36;{total}</div>
      <div className={styles.rTableCellCenter}>
        <button
          className={styles.rButton}
          onClick={() => decrement(id)}
          data-id="product-decrement"
        >
          &ndash;
        </button>
        &nbsp;
        <button
          className={styles.rButton}
          onClick={() => increment(id)}
          data-id="product-increment"
        >
          +
        </button>
        &nbsp;
        <button
          className={styles.rButton}
          onClick={() => clear(id)}
          data-id="product-increment"
        >
          x
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  qty: state.order[ownProps.id] || 0,
});

const mapDispatchToProps = {
  increment,
  decrement,
  clear,
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderLine);
