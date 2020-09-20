import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import styles from './restaurant.module.css';
import { NavLink, Redirect, Route, Switch, withRouter } from 'react-router-dom';

const Restaurant = ({ id, name, menu, reviews, averageRating, match }) => {
  const tabs = [
    {
      title: 'Menu',
      url: 'menu',
      content: <Menu menu={menu} restaurantId={id} />,
    },
    {
      title: 'Review',
      url: 'review',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>

      <div className={styles.tabs}>
        {tabs.map(({ title, url }) => (
          <NavLink
            key={`link_${title}`}
            to={`${match.url}/${url}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {title}
          </NavLink>
        ))}
      </div>

      <Switch>
        <Redirect from={`${match.path}`} to={`${match.path}/menu`} exact />
        {tabs.map(({ title, url, content }) => (
          <Route
            key={`route_${title}`}
            path={`${match.path}/${url}`}
            render={() => content}
          />
        ))}
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(withRouter(Restaurant));
