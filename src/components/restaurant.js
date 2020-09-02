import React from 'react';
import Menu from './menu';
import Review from './reviews';
import Rating from './rate';
import averageRating from '../hocs/average-rating';

function Restaurant(props) {
  const { restaurant, averageRating } = props;

  return (
    <div>
      <div>
        Restaurant rating: <Rating rating={averageRating} />
      </div>
      <div>
        Menu: <Menu menu={restaurant.menu} />
      </div>
      <div>
        Reviews: <Review reviews={restaurant.reviews} />
      </div>
    </div>
  );
}
export default averageRating(Restaurant);
