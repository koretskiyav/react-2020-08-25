import React, { useContext } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Loader from '../loader';
import styles from './basket.module.css';
import './basket.css';
import BasketRow from './basket-row';
import BasketItem from './basket-item';
import Button from '../button';
import {
  orderProductsSelector,
  totalSelector,
  location,
  basketLoadingSelector,
  basketLoadedSelector,
} from '../../redux/selectors';
import { userContext } from '../../contexts/user';
import { loadBasket } from '../../redux/actions';

function Basket({
  title = 'Basket',
  total,
  orderProducts,
  location,
  loading,
  loaded,
  loadBasket,
  error,
}) {
  const { currency } = useContext(userContext);

  if (!total) {
    return (
      <div className={styles.basket}>
        <h4 className={styles.title}>Select a meal from the list</h4>
      </div>
    );
  }

  const totalFinal = total * currency.sum;
  if (loading) {
    return <Loader />;
  }

  return (
    <div className={styles.basket}>
      <h4 className={styles.title}>{/* {`${name}'s basket`} */}</h4>
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
              subtotal={subtotal * currency.sum}
              restaurantId={restaurantId}
              currencyId={currency.id}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <hr className={styles.hr} />
      <BasketRow label="Sub-total" content={`${totalFinal} ${currency.id}`} />
      <BasketRow label="Delivery costs:" content="FREE" />
      <BasketRow label="total" content={`${totalFinal} ${currency.id}`} bold />
      {!location ? (
        <Link to="/checkout">
          <Button primary block>
            checkout
          </Button>
        </Link>
      ) : (
        <Button primary block onClick={() => loadBasket(orderProducts)}>
          PAY
        </Button>
      )}
    </div>
  );
}
const mapDispatchToProps = {
  loadBasket,
};

export default connect(
  createStructuredSelector({
    total: totalSelector,
    orderProducts: orderProductsSelector,
    loading: basketLoadingSelector,
    loaded: basketLoadedSelector,
    location: location('/checkout'),
  }),
  mapDispatchToProps
)(Basket);
