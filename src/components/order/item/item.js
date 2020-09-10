import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './item.module.css';
import MinusIcon from '../../product/icons/minus.svg';
import PlusIcon from '../../product/icons/plus.svg';
import CloseIcon from '../../product/icons/close.svg';
import { increment, decrement, remove } from '../../../redux/actions';

const Item = ({ product, amount, increment, decrement, remove, fetchData }) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
    // eslint-disable-next-line
  }, []);

  const price = product.price * amount;

  return (
    <div className={styles.product} data-id="order-item">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <div className={styles.price}>{price} $</div>
        </div>
        <div>
          <div className={styles.counter}>
            <div className={styles.count} data-id="product-amount">
              {amount}
            </div>
            <div className={styles.buttons}>
              <button
                className={styles.button}
                onClick={() => decrement(product.id)}
                data-id="product-decrement"
              >
                <img src={MinusIcon} alt="minus" />
              </button>
              <button
                className={styles.button}
                onClick={() => increment(product.id)}
                data-id="product-increment"
              >
                <img src={PlusIcon} alt="plus" />
              </button>
              <button
                className={styles.button}
                onClick={() => remove(product.id)}
                data-id="product-remove"
              >
                <img src={CloseIcon} alt="remove" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Item.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  // from HOC counter
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  remove: PropTypes.func,
  fetchData: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
