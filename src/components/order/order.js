import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Item from './item';
import styles from './order.module.css';

const Order = ({ restaurants, order }) => {
  const menu = restaurants.flatMap((restaurant) => restaurant.menu);

  let products = [];
  let total = 0;

  Object.entries(order).forEach(([key, value]) => {
    if (value > 0) {
      let item = menu.find(({ id }) => id === key);

      total += value * item.price;

      products.push(item);
    }
  });

  return (
    <div className={styles.order}>
      <div>
        {products.map((product) => (
          <Item key={product.id} product={product} />
        ))}
      </div>
      <div>Total: {total} $</div>
    </div>
  );
};

Order.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      menu: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
          price: PropTypes.number.isRequired,
        })
      ),
    }).isRequired
  ).isRequired,
  order: PropTypes.object,
};

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);
