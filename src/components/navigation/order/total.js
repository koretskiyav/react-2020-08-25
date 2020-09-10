import React from 'react';
import styles from './total.module.css';

const Total = ({ nameTotal, price, count, common }) => {
  return (
    <div className={styles.total}>
      <div>{nameTotal}</div>
      <div></div>
      <div>{price}</div>
      <div>{count}</div>
      <div>{common}</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Total;
