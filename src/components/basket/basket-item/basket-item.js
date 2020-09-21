import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import { productRestaurantSelector } from '../../../redux/selectors';
import Button from '../../button';
import styles from './basket-item.module.css';

function BasketItem({
  product,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
  productRestaurant,
}) {
  return (
    <div className={styles.basketItem}>
      <div className={styles.name}>
        <Link to={`/restaurants/${productRestaurant[product.id]}/menu`}>
          {product.name}
        </Link>
      </div>
      <div className={styles.info}>
        <div className={styles.counter}>
          <Button
            onClick={() => decrement(product.id)}
            icon="minus"
            secondary
            small
          />
          <span className={styles.count}>{amount}</span>
          <Button
            onClick={() => increment(product.id)}
            icon="plus"
            secondary
            small
          />
        </div>
        <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
        <Button
          onClick={() => remove(product.id)}
          icon="delete"
          secondary
          small
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productRestaurant: productRestaurantSelector(state),
});

export default connect(mapStateToProps, { increment, decrement, remove })(
  BasketItem
);
