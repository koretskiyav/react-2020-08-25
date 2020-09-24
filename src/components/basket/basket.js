import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import Loader from '../loader';
import {
  orderProductsSelector,
  totalSelector,
  orderSubmittingSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user';
import { submitOrder } from '../../redux/actions';
import { currencyContext } from '../../contexts/currency';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  submitOrder,
  orderSubmitting,
}) {
  // console.log('render Basket');
  const { getAmount } = useContext(currencyContext);

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
              subtotal={getAmount(subtotal)}
              restaurantId={restaurantId}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={getAmount(total)} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={getAmount(total)} bold />
      {orderSubmitting ? (
        <Loader />
      ) : (
        <Link to="/checkout">
          <Button primary block onClick={submitOrder}>
            checkout
          </Button>
        </Link>
      )}
    </div>
  );
}

export default connect(
  createStructuredSelector({
    total: totalSelector,
    orderProducts: orderProductsSelector,
    orderSubmitting: orderSubmittingSelector,
  }),
  { submitOrder }
)(Basket);
