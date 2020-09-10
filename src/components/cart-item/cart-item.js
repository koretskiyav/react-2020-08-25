import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement, remove } from '../../redux/actions';

const CartItem = ({
  product,
  amount,
  increment,
  decrement,
  remove,
  fetchData,
}) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
    // eslint-disable-next-line
  }, []);

  const price = product.price * amount;

  return (
    <div data-id="cart-item">
      <h4>{product.name}</h4>
      <div>{price} $</div>
      <div>
        <button
          onClick={() => decrement(product.id)}
          data-id="product-decrement"
        >
          -
        </button>
        <button
          onClick={() => increment(product.id)}
          data-id="product-increment"
        >
          +
        </button>
        <button onClick={() => remove(product.id)} data-id="product-remove">
          x
        </button>
      </div>
      <hr />
    </div>
  );
};

CartItem.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
