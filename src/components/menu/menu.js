import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';

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

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { products, loading, loaded } = this.props;

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }

    return (
      <div className={styles.menu}>
        <div>
          {loading || !loaded ? (
            <Loader />
          ) : (
            products.map((product) => (
              <Product key={product.id} product={product} />
            ))
          )}
        </div>
        <div>
          <Basket />
        </div>
      </div>
    );
  }
}

export default connect((state) => ({
  products: productsListSelector(state),
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
}))(Menu);
