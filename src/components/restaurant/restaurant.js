import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

const Restaurant = ({ restaurant }) => {
  const { name, menu, reviews } = restaurant;

  console.log('Revies: ', reviews);
  console.log('Menu: ', menu);

  const averageRating = 3;

  // const averageRating = useMemo(() => {
  //   const total = reviews.reduce((acc, { rating }) => acc + rating, 0);
  //   return Math.round(total / reviews.length);
  // }, [reviews]);

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    { title: 'Reviews', content: <Reviews reviews={reviews} /> },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} />
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    name: PropTypes.string,
    menu: PropTypes.object,
    reviews: PropTypes.object.isRequired,
  }).isRequired,
};

export default Restaurant;
