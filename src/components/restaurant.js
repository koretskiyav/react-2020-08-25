import React, { useState } from 'react';
import Rate from './rate';
import Reviews from './reviews';
import Menu from './menu';
import useRating from '../hooks/use-rating';

const Restaurant: React.FC = (props) => {
  const rating = useRating(props);
  const { name, menu } = props;
  const [showReviews, setShowReviews] = useState(false);

  const onShowReviewsClick = (e) => {
    setShowReviews(!showReviews);
    e.preventDefault();
  };

  return (
    <>
      <h2>
        {name}
        <Rate rate={rating} />
      </h2>
      <a href="#" onClick={onShowReviewsClick}>
        {showReviews ? 'Hide ' : 'Show '} reviews
      </a>
      {showReviews && <Reviews restaurant={props} />}

      <h2>Menu</h2>
      <Menu menu={menu} />
    </>
  );
};

export default Restaurant;
