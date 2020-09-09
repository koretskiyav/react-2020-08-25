import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { decrement, increment, remove } from '../../redux/actions';
import styles from '../product/product.module.css';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';

const Order = ({
  menu,
  product,
  increment,
  decrement,
  remove,
  amount,
  fetchData,
}) => {
  useEffect(() => {
    fetchData && fetchData(product.id);
    // eslint-disable-next-line
  }, []);

  const totalPrice = useMemo(() => {
    console.log('menu:', menu);

    const totalPrice = menu.reduce((acc, { price }) => acc + price, 0);
    return totalPrice;
  }, [menu]);

  return (
    <div>
      <h4>Basket:</h4>
      <p>{product.name}</p>
      <h5>Total: </h5>
      <div>
        <div className={styles.counter}>
          <div className={styles.count}>{amount}</div>
          <div className={styles.buttons}>
            <button
              className={styles.button}
              onClick={() => decrement(product.id)}
            >
              <img src={MinusIcon} alt="minus" />
            </button>
            <button
              className={styles.button}
              onClick={() => increment(product.id)}
            >
              <img src={PlusIcon} alt="plus" />
            </button>
            <button
              className={styles.button}
              onClick={() => remove(product.id)}
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
};

// const mapStateToProps = (state, ownProps) => ({
//   // amount: state.order[ownProps.product.id] || 0,
//   amount: 10,
// });
//
// const mapDispatchToProps = {
//   increment,
//   decrement,
//   remove,
// };

export default connect()(Order);
