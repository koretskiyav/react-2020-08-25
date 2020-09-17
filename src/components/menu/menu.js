import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Product from '../product';
import Loader from '../loader';
import styles from './menu.module.css';
import Basket from '../basket';
import {
  productsListSelector,
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

const Menu = ({ menu, restaurantId, loadProducts, loading, loaded }) => {
  useEffect(() => {
    loadProducts(restaurantId);
  }, [restaurantId]); // eslint-disable-line

  if (loading || !loaded) return <Loader />;

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((product) => (
          <Product product={product} key={product.id} id={product.id}/>
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
}

 Menu.propTypes = {
   menu: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.string.isRequired,
     }).isRequired
   ).isRequired,
 };

export default connect(  (state) => ({
    menu: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }), {loadProducts}) (Menu);
