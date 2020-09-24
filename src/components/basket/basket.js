import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  locationPathNameSelector,
  orderLoadingSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user';
import useCurrency from '../../hooks/use-currency';
import Loader from '../loader';
import { submitOrder } from '../../redux/actions';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  locationPathName,
  submitOrder,
  orderLoading,
}) {
  const { getCurrency } = useCurrency();

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  let LinkButton = (
    <Link to="/checkout">
      <Button primary block>
        checkout
      </Button>
    </Link>
  );

  if (locationPathName === '/checkout') {
    if (orderLoading) {
      LinkButton = <Loader />;
    } else {
      LinkButton = (
        <Button primary block onClick={submitOrder}>
          submit
        </Button>
      );
    }
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>
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
      <BasketRow label="Sub-total" content={`${getCurrency(total)}`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${getCurrency(total)}`} bold />
      {LinkButton}
    </div>
  );
}

export default connect(
  createStructuredSelector({
    total: totalSelector,
    orderProducts: orderProductsSelector,
    locationPathName: locationPathNameSelector,
    orderLoading: orderLoadingSelector,
  }),
  {
    submitOrder,
  }
)(Basket);
