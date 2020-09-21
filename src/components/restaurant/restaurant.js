import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { NavLink, Route, Switch } from 'react-router-dom';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import styles from '../restaurants/restaurants.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating }) => {
  const tabs = [
    { title: 'Menu', to: 'menu' },
    { title: 'Reviews', to: 'reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      {tabs.map(({ title, to }) => (
        <NavLink
          key={title}
          to={`/restaurants/${id}/${to}`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          {title}
        </NavLink>
      ))}
      <Switch>
        <Route
          path={`/restaurants/${id}/menu`}
          render={() => <Menu menu={menu} restaurantId={id} />}
        />
        <Route
          path={`/restaurants/${id}/reviews`}
          render={() => <Reviews reviews={reviews} restaurantId={id} />}
        />
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
)(Restaurant);
