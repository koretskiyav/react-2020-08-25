import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';

import { loadProducts } from '../../redux/actions';
import { connect } from 'react-redux';
import {
  productsListSelector,
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    products: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        price: PropTypes.number,
        ingredients: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      }).isRequired
    ).isRequired,
  };

  state = { error: null };

  componentDidUpdate(prevProps) {
    if (this.props.restaurantId !== prevProps.restaurantId) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { products, loading, loaded } = this.props;

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    if (loading || !loaded) return <Loader />;

    return (
      <div className={styles.menu}>
        <div>
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
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
    products: productsListSelector(state),
    loading: productsLoadingSelector(state),
    loaded: productsLoadedSelector(state),
  }),
  {
    loadProducts,
  }
)(Menu);
