import React, { useMemo } from 'react';
import { connect } from 'react-redux';

import OrderLine from '../orderline';

import styles from './order.module.css';

const Order = ({ restaurants, order }) => {
  const orderArray = Object.entries(order);

  //--------------------------------------------------------------
  // Calculation needs to be moved out to a separate function/hook???
  let fullOrderArray = [];

  orderArray.forEach((ord) => {
    let restaurant = restaurants.find((x) =>
      x.menu.find((m) => m.id === ord[0])
    );
    let menu = restaurant.menu;
    let product = menu.find((p) => p.id === ord[0]);
    fullOrderArray.push({
      id: ord[0],
      name: product.name,
      price: product.price,
      restaurantName: restaurant.name,
      qty: ord[1],
      total: product.price * ord[1],
    });
  });
  //--------------------------------------------------------------

  const orderTotal = useMemo(() => {
    const grandTotal = fullOrderArray.reduce(
      (acc, { total }) => acc + total,
      0
    );
    return grandTotal;
  }, [fullOrderArray]);

  if (fullOrderArray.length === 0)
    return (
      <div className={styles.order}>
        <h3>Your Order:</h3>
        <p>No items found.</p>
      </div>
    );

  return (
    <div className={styles.order}>
      <h3>Your Order:</h3>
      <div className={styles.rTable}>
        <div className={styles.rTableRow}>
          <div className={styles.rTableHead}>Dish Name</div>
          <div className={styles.rTableHead}>Restaurant</div>
          <div className={styles.rTableHeadCenter}>Qty</div>
          <div className={styles.rTableHeadCenter}>Price</div>
          <div className={styles.rTableHeadCenter}>Total</div>
          <div className={styles.rTableHeadCenter}>Change Order</div>
        </div>
        {fullOrderArray.map((ord) => (
          <OrderLine key={ord.id} {...ord} />
        ))}
      </div>
      <h3>Order Total: &#36;{orderTotal}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);
