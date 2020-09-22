import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { NavLink } from 'react-router-dom';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { Link, Route, Switch } from 'react-router-dom';
import styles from '../restaurants/restaurants.module.css';

const Restaurant = ({ id, name, menu, reviews, averageRating, match }) => {

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>
      <div className={styles.tabs}>
        <NavLink
          to={`${match.url}/products`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          to={`${match.url}/reviews`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>
      <Switch>
        <Route path={`${match.url}/products`}>
          <Menu menu={menu} restaurantId={id} />
        </Route>
        <Route path={`${match.url}/reviews`}>
          <Reviews reviews={reviews} restaurantId={id} />
        </Route>
      </Switch>
      {/*<Route  path='path'>*/}
      {/*  <Menu menu={menu} restaurantId={id} />*/}
      {/*</Route>  }*/}
      {/*<Tabs tabs={tabs} />*/}
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
