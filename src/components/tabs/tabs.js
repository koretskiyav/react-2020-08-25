import React /* , { useState } */ from 'react';
import PropTypes from 'prop-types';
/* import cn from 'classnames'; */
import { NavLink } from 'react-router-dom';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {
  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ title, url }, index) => (
          <NavLink
            key={`link_${title}`}
            to={url}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {title}
          </NavLink>
        ))}
      </div>
    </>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
