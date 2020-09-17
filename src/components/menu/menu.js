import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Product from '../product';
import { connect } from 'react-redux';
import Loader from '../loader';
import { loadProducts } from '../../redux/actions';
import styles from './menu.module.css';
import Basket from '../basket';
import {
  productsSelector,
  selectProductsLoaded,
  selectProductsLoading,
} from '../../redux/selectors';

class Menu extends React.Component {
  componentDidMount() {
    const {
      productsLoading,
      productsLoaded,
      loadProducts,
      restaurantId,
    } = this.props;
    if (!productsLoading && !productsLoaded) {
      loadProducts(restaurantId);
    }
  }

  state = { error: null };

  render() {
    const { productsLoading, products } = this.props;

    if (productsLoading) {
      return <Loader />;
    }

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
      <div className={styles.menu}>
        {Object.values(products.entities).map((product) => (
          <Product key={product.id} product={product} />
        ))}
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

// Menu.propTypes = {
//   menu: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//     }).isRequired
//   ).isRequired,
// };

export default connect(
  (state) => ({
    productsLoading: selectProductsLoading(state),
    productsLoaded: selectProductsLoaded(state),
    products: productsSelector(state),
  }),
  {
    loadProducts,
  }
)(Menu);
