import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styles from '../../product/product.module.css';
import MinusIcon from '../../product/icons/minus.svg';
import PlusIcon from '../../product/icons/plus.svg';
import { increment, decrement, deleteId } from '../../../redux/actions';

// import counter from '../../hocs/counter';

const BasketProduct = ({ product, amount, increment, decrement, deleteId }) => {
  const price = amount * product.price;
  return (
    <div className={styles.product} data-id="product">
      <div className={styles.content}>
        <div>
          <h4 className={styles.title}>{product.name}</h4>
          <p className={styles.description}>{product.ingredients.join(', ')}</p>
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
                className={styles.buttonDelete}
                onClick={() => deleteId(product.id)}
                data-id="product-delete"
              >
                delete
              </button>
              <button
                className={styles.button}
                onClick={() => increment(product.id)}
                data-id="product-increment"
              >
                <img src={PlusIcon} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BasketProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
    ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }).isRequired,
  // from HOC counter
  amount: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  fetchData: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => ({
  amount: state.order[ownProps.product.id] || 0,
});

const mapDispatchToProps = {
  increment,
  decrement,
  deleteId,
};

// const mapDispatchToProps = (dispatch) => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// });

export default connect(mapStateToProps, mapDispatchToProps)(BasketProduct);
