import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import getProductById from '../../utils/get-product-by-id';
import totalPrice from '../../utils/total-price';
import { increment, decrement, remove } from '../../redux/actions';

const Order = ({ order, product, fetchData, decrement, increment, remove }) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <hr />
      <h3>Basket:</h3>

      {Object.entries(order).map(([id, count]) => {
        const product = getProductById(id);

        return (
          <p key={id}>
            {product.name}: {count}, price: {count * product.price} $
            <button onClick={() => increment(product.id)}>+</button>
            <button onClick={() => decrement(product.id)}>-</button>
            <button onClick={() => remove(product.id)}>x</button>
          </p>
        );
      })}

      <h4>Total price: ${totalPrice(Object.entries(order))}</h4>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

const mapDispatchToProps = {
  increment,
  decrement,
  remove,
};

export default connect(mapStateToProps, mapDispatchToProps)(Order);
