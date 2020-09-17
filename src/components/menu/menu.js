import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';

import { loadProducts } from '../../redux/actions';
import {
  selectedRestaurantIdSelector,
  productsLoadingSelector,
  productsLoadedSelector,
  loadedProductsCheckSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Menu = (props) => {
  const {
    menu,
    loadProducts,
    activeRestaurant,
    loading,
    loaded,
    alreadyLoadedProducts,
  } = props;

  useEffect(() => {
    !alreadyLoadedProducts && loadProducts(activeRestaurant);
  }, [activeRestaurant]);

  if (loading || !loaded) {
    return <Loader />;
  }

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  activeRestaurant: selectedRestaurantIdSelector(state),
  alreadyLoadedProducts: loadedProductsCheckSelector(state),
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});
export default connect(mapStateToProps, { loadProducts })(Menu);
