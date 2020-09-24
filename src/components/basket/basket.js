import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderLoadedSelector,
  orderLoadingSelector,
  orderProductsSelector,
  totalSelector,
} from '../../redux/selectors';
import { UserConsumer } from '../../contexts/user';
import { checkout } from '../../redux/actions';
import Loader from '../loader';

function Basket({ total, orderProducts, checkout, loading }) {
  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  if (loading) {
    return <Loader />;
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
      <BasketRow label="Sub-total" content={`${total} $`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${total} $`} bold />
      <Link to="/checkout">
        <Button primary block onClick={checkout}>
          checkout
        </Button>
      </Link>
    </div>
  );
}

export default connect(
  createStructuredSelector({
    total: totalSelector,
    orderProducts: orderProductsSelector,
    loading: orderLoadingSelector,
    loaded: orderLoadedSelector,
  }),
  {
    checkout,
  }
)(Basket);
