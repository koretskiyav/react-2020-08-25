import React from 'react';
import styles from '../controls/controls.module.css';
import MinusIcon from '../product/icons/minus.svg';
import PlusIcon from '../product/icons/plus.svg';

const Controls = (props) => {
  const { handleDecrement, handleIncrement, handleRemove } = props;

  return (
    <div className={styles.buttons}>
      <button
        className={styles.button}
        onClick={handleDecrement}
        data-id="product-decrement"
      >
        <img src={MinusIcon} alt="minus" />
      </button>
      <button
        className={styles.button}
        onClick={handleIncrement}
        data-id="product-increment"
      >
        <img src={PlusIcon} alt="plus" />
      </button>
      <button
        className={`${styles.button} ${styles.test}`}
        onClick={handleRemove}
        data-id="product-removal"
      >
        <span className={styles.remove}>X</span>
      </button>
    </div>
  );
};

export default Controls;
