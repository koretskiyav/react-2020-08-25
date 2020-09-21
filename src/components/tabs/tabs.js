import React, { useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './tabs.module.css';

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const { content } = tabs[activeTab];

  return (
    <>
      <div className={styles.tabs}>
        {tabs.map(({ id, title }, index) => (
          <span
            key={title}
            className={cn(styles.tab, { [styles.active]: index === activeTab })}
            onClick={() => setActiveTab(index)}
          >
            {title}
          </span>
          <Link to={`/restaurants/${id}/reviews`}>{title}</Link>
          <Link to={`/restaurants/${id}/menu`}>{title}</Link>
        ))}
      </div>
      {content}
    </>
  );

  return <Route path="/restaurants/:restId/reviews" component={Rewiews} />
  return <Route path="/restaurants/:restId/menu" component={Menu} />

};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.element.isRequired,
    }).isRequired
  ).isRequired,
};

export default Tabs;
