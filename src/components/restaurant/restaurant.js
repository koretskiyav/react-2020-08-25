import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import Loader from '../loader';

import { 
  averageRatingSelector,   
  reviewsLoadingSelector,
  reviewsLoadedSelector
} from '../../redux/selectors';

const Restaurant = ({ id, name, menu, reviews, averageRating, loading, loaded }) => {
  const tabs = [
    { title: 'Menu', content: <Menu restaurantId={id}/> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  if (loading || !loaded){
    return (
      <div>
        <Banner heading={name}>
          <Loader />
        </Banner>
        <Tabs tabs={tabs} />
      </div>
    )
  }

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
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect((state, props) => ({
  averageRating: averageRatingSelector(state, props),
  loading:   reviewsLoadingSelector(state),
  loaded: reviewsLoadedSelector(state)
}))(Restaurant);
