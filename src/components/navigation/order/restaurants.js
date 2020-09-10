import React from 'react';
import styles from './restaurants.module.css';
import Product from './product';
import Total from './total';
import PropTypes from 'prop-types';

const Restaurants = ({ restauran }) => {
  const { name, products } = restauran;
  return (
    <div className={styles.restauran}>
      <div className={styles['restauran-name']}>{name}</div>

      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}

      <Total
        nameTotal="Всего"
        price={products.reduce((res, { price }) => res + price, 0)}
        count={products.reduce((res, { count }) => res + count, 0)}
        common={products.reduce(
          (res, { count, price }) => res + count + price,
          0
        )}
      />
    </div>
  );
};

Restaurants.propTypes = {
  restauran: PropTypes.shape({
    name: PropTypes.string,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }).isRequired,
};

export default Restaurants;
