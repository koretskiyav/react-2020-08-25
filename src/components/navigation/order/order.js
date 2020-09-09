import React, { useState } from 'react';
/* import PropTypes from 'prop-types'; */
import styles from './order.module.css';
import { connect } from 'react-redux';

const Order = ({ order }) => {
  console.log(order);

  const [isVisiblePanel, setToggleVisiblePanel] = useState(false);
  const hide = (e) => {
    if (!e.target.closest(`.${styles['order-center-box']}`)) {
      setToggleVisiblePanel(false);
    }
  };
  const show = () => setToggleVisiblePanel(true);
  const toggle = () => setToggleVisiblePanel(!isVisiblePanel);

  return (
    <>
      <div className={styles['order-buttom']} onClick={toggle}>
        ORDER
      </div>
      {isVisiblePanel ? (
        <div className={styles['order-panel']} onClick={hide}>
          <div className={styles['order-center-box']}>123</div>
        </div>
      ) : null}
    </>
  );
};

/* Navigation.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  onRestaurantClick: PropTypes.func.isRequired,
}; */

const mapStateToProps = (state) => ({
  order: state.order,
});

export default connect(mapStateToProps)(Order);
