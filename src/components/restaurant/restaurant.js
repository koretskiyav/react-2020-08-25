import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import {
  averageRatingSelector,
  productsLoadedSelector,
  productsLoadingSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';
import Loader from '../loader';

const Restaurant = ({
  id,
  name,
  menu,
  reviews,
  averageRating,
  loading,
  loaded,
  loadProducts,
}) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadProducts(id);
    }
  }, [id, loadProducts, loaded, loading]);

  if (loading || !loaded) return <Loader />;

  const tabs = [
    { title: 'Menu', content: <Menu menu={menu} /> },
    {
      title: 'Reviews',
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
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
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  (state, props) => ({
    averageRating: averageRatingSelector(state, props),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state, props),
  }),
  { loadProducts }
)(Restaurant);
