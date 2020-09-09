import React from 'react';
/* import PropTypes from 'prop-types'; */
import styles from './order.module.css';
import { connect } from 'react-redux';
import toggle from '../../../hocs/toggle';

const Order = ({ order, isStateToogle, toggle, setFalse, restaurants }) => {
  const restaurantsProduct = restaurants
    .filter(({ menu }) =>
      menu.map(({ id }) => id).some((id) => Object.keys(order).includes(id))
    )
    .map(({ id, name, menu }) => {
      const products = menu.filter(({ id }) => Object.keys(order).includes(id));
      return {
        id,
        name,
        products: products.map((e) => ({
          ...e,
          count: order[e.id],
        })),
      };
    });

  console.log(restaurantsProduct);

  const hide = (e) => {
    if (!e.target.closest(`.${styles['order-center-box']}`)) {
      setFalse();
    }
  };

  return (
    <>
      <div className={styles['order-buttom']} onClick={toggle}>
        ORDER
      </div>
      {isStateToogle ? (
        <div className={styles['order-panel']} onClick={hide}>
          <div className={styles['order-center-box']}>
            {restaurantsProduct.map(({ id, name, products }) => (
              <div className={styles.restaurant} key={id}>
                <div
                  className={styles['restaurant-name']}
                  style={{
                    gridRow: `1 / ${products.length + 2}`,
                  }}
                >
                  {name}
                </div>

                {products.map(({ id, name, price, count }) => (
                  <React.Fragment key={id}>
                    <div className={styles['restaurant-product']}>{name}</div>
                    <div className={styles['restaurant-price']}>{price}</div>
                    <div className={styles['restaurant-count']}>{count}</div>
                    <div className={styles['restaurant-common-count']}>
                      {price + count}
                    </div>
                  </React.Fragment>
                ))}

                <div className={styles['restaurant-product']}></div>
                <div className={styles['restaurant-price']}>
                  {products.reduce((res, { price }) => res + price, 0)}
                </div>
                <div className={styles['restaurant-count']}>
                  {products.reduce((res, { count }) => res + count, 0)}
                </div>
                <div className={styles['restaurant-common-count']}>
                  {products.reduce(
                    (res, { count, price }) => res + count + price,
                    0
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
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

const mapStateToProps = (state) => ({
  order: state.order,
  restaurants: state.restaurants.restaurants,
});

export default connect(mapStateToProps)(toggle(Order));
