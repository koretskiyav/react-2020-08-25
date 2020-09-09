import React from 'react';
import { connect } from 'react-redux';
import styles from './order.module.css';
import { restaurants } from '../../fixtures';
import Controls from '../controls';
import { increment, decrement, remove } from '../../redux/actions';

const Order = (props) => {
  const { order, increment, decrement, remove } = props;

  const isOrderEmpty = Object.keys(order).length === 0;
  let totalPrice = 0;

  // Get all products from all restaurants.
  const getAllProducts = () => {
    return restaurants.reduce((acc, restaurant) => {
      restaurant.menu.map((item) => {
        const { id, ...rest } = item;
        acc[id] = rest;
      });
      return acc;
    }, {});
  };

  const allProducts = getAllProducts();

  const processDataForRender = () => {
    let detailedOrder = [];

    Object.keys(order).forEach((itemId) => {
      const { price, name } = allProducts[itemId];
      const amount = order[itemId];
      totalPrice += price * amount;

      detailedOrder.push({
        itemId,
        name,
        amount,
        calculatedPrice: price * amount,
      });
    });

    return detailedOrder;
  };

  const detailedOrder = processDataForRender();

  return (
    <div className={styles.orderWrap}>
      {isOrderEmpty ? (
        <p>Please add any product.</p>
      ) : (
        <div>
          Your Order:
          <ul className={styles.orderList}>
            {detailedOrder.map((item) => {
              const { itemId, name, calculatedPrice, amount } = item;
              return (
                <li key={itemId}>
                  <b>{name} </b>
                  <span>${calculatedPrice}</span>
                  <div>
                    <i>x {amount}</i>
                    <Controls
                      handleIncrement={() => increment(itemId)}
                      handleDecrement={() => decrement(itemId)}
                      handleRemove={() => remove(itemId)}
                    />
                  </div>
                  <br />
                </li>
              );
            })}
          </ul>
          <b>Total price: ${totalPrice}</b>
        </div>
      )}
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
