import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item';
import styles from './cart.module.css';

const Cart = ({ restaurants, order }) => {
  const menu = restaurants.flatMap((restaurant) => restaurant.menu);
  let total = 0;
  let products = [];

  let keys = Object.keys(order);

  products = menu.filter(function (item) {
    if (keys.includes(item.id) && order[item.id] !== 0) {
      total += order[item.id] * item.price;
      return true;
    }
  });

  return (
    <div className={styles.cart}>
      <h3>Ваша корзина</h3>
      <div>
        {products.map((product) => (
          <CartItem key={product.id} product={product} />
        ))}
      </div>
      <div className={styles.total}>Итого: {total}$.</div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Cart);
