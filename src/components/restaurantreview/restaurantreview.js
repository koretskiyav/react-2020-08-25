import React from 'react';
import RestHeader from '../restheader';

const RestaurantReview = ({ pageType, match }) => {
  const restId = match.params.restId;

  return (
    <div>
      <RestHeader restId={restId} />
      {pageType === 'review' ? <div>Reviews</div> : <div>Menu</div>}
    </div>
  );
};

export default RestaurantReview;
