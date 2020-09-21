import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { restaurantsListSelector } from '../../redux/selectors';

import styles from './restheader.module.css';

const RestHeader = ({ restaurants, restId }) => {
  return (
    <>
      <div className={styles.tabs}>
        {restaurants.map(({ id, name }, index) => (
          <NavLink
            key={id}
            to={`/restaurants/${id}/menu`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {name}
          </NavLink>
        ))}
      </div>
    </>
  );
};

export default connect(
  createStructuredSelector({
    restaurants: restaurantsListSelector,
  })
)(RestHeader);
