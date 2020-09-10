import React from 'react';
import styles from './order.module.css';
import { connect } from 'react-redux';
import toggle from '../../../hocs/toggle';
import Restaurants from './restaurants';
import Total from './total';

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

  const hide = (e) => {
    if (!e.target.closest(`.${styles['order-center-box']}`)) {
      setFalse();
    }
  };

  return (
    <>
      <div className={styles['order-button']} onClick={toggle}>
        ORDER
      </div>

      {isStateToogle ? (
        <div className={styles['order-panel']} onClick={hide}>
          <div className={styles['order-center-box']}>
            <div className={styles['order-title']}>
              <div>Наименование ресторана</div>
              <div>Продукт</div>
              <div>Цена</div>
              <div>Всего единиц</div>
              <div>Общая стоимость</div>
              <div></div>
              <div></div>
              <div></div>
            </div>

            {restaurantsProduct.map((restauran) => (
              <Restaurants key={restauran.id} restauran={restauran} />
            ))}

            <Total
              nameTotal="Итог по всем ресторанам"
              price={restaurantsProduct.reduce(
                (resAll, { products }) =>
                  resAll + products.reduce((res, { price }) => res + price, 0),
                0
              )}
              count={restaurantsProduct.reduce(
                (resAll, { products }) =>
                  resAll + products.reduce((res, { count }) => res + count, 0),
                0
              )}
              common={restaurantsProduct.reduce(
                (resAll, { products }) =>
                  resAll +
                  products.reduce(
                    (res, { count, price }) => res + count + price,
                    0
                  ),
                0
              )}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

const mapStateToProps = (state) => ({
  order: state.order,
  restaurants: state.restaurants.restaurants,
});

export default connect(mapStateToProps)(toggle(Order));
