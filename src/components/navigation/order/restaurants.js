import React from 'react';
/* import PropTypes from 'prop-types'; */
import styles from './restaurants.module.css';
import Product from './product';
import Total from './total';
/* import { connect } from 'react-redux'; */

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

/* Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRestaurantClick: PropTypes.func.isRequired,
}; */

/* const mapStateToProps = (state) => ({
  order: state.order,
  restaurants: state.restaurants.restaurants,
}); */

export default Restaurants; //connect(mapStateToProps)();
