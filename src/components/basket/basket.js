import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import { orderProductsSelector, totalSelector } from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user';
import { purchaseGoods } from '../../redux/actions';
import { CurrencyPrice } from '../../hooks/currency-price';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  purchaseGoods,
  match,
}) {
  // console.log('render Basket');
  // const { name } = useContext(userContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
        {/* {`${name}'s basket`} */}
        <UserConsumer>{({ name }) => `${name}'s basket`}</UserConsumer>
      </h4>
      <TransitionGroup>
        {orderProducts.map(({ product, amount, subtotal, restaurantId }) => (
          <CSSTransition
            key={product.id}
            timeout={500}
            classNames="basket-item-animation"
          >
            <BasketItem
              product={product}
              amount={amount}
              subtotal={subtotal}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={CurrencyPrice(total)} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={CurrencyPrice(total)} bold />
      <Link to="/checkout">
        <Button
          primary
          block
          onClick={() => {
            return match.path === '/checkout'
              ? purchaseGoods(orderProducts)
              : null;
          }}
        >
          checkout
        </Button>
      </Link>
    </div>
  );
}

export default withRouter(
  connect(
    createStructuredSelector({
      total: totalSelector,
      orderProducts: orderProductsSelector,
    }),
    { purchaseGoods }
  )(Basket)
);
