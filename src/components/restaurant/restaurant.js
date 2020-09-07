import React, { useMemo } from 'react';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import PropTypes from 'prop-types';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  const averageRating = useMemo(() => {
    const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.restaurant}>
        <Menu menu={menu} />
        <Reviews reviews={reviews} />
      </div>
    </div>
  );
};

Restaurant.propTypes = {
  Restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  }),
};

export default Restaurant;
