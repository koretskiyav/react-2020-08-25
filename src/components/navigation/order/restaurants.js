import React from 'react';
import styles from './restaurants.module.css';
import Product from './product';
import Total from './total';

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

export default Restaurants;
