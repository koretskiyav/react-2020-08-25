import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { loadProducts } from '../../redux/actions';
import {
  productsLoadingSelector,
  productsLoadedSelector,
  restaurantSelector,
} from '../../redux/selectors';

import Loader from '../loader';
import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';

class Menu extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
  };

  state = { error: null };

  loadProductsIfNeeded = () => {
    const { loadProducts, id, loading, loaded } = this.props;
    if (!loading && !loaded) {
      loadProducts(id);
    }
  };

  componentDidMount() {
    this.loadProductsIfNeeded();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.id !== this.props.id) {
      this.loadProductsIfNeeded();
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const {
      restaurant: { menu },
      loading,
    } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
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
  }
}

export default connect(
  createStructuredSelector({
    loading: productsLoadingSelector,
    loaded: productsLoadedSelector,
    restaurant: restaurantSelector,
  }),
  { loadProducts }
)(Menu);
