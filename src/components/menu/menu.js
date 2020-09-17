import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';
import { connect } from 'react-redux';

import {
  productSelector,
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    this.props.loadProducts(this.props.restaurantId);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.restaurantId != this.props.restaurantId) {
      this.props.loadProducts(this.props.restaurantId);
    }
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error.message}</p>;
    }
    if (this.props.loading || !this.props.loaded) return <Loader />;

    return (
      <div className={styles.menu}>
        <div>
          {this.props.product.map((product) => (
            <Product key={product.id} id={product.id} />
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

const mapStateToProps = (state) => ({
  product: productSelector(state),
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

// const mapStateToProps = (state, props) => ({
//   amount: productAmountSelector(state, props),
//   product: productSelector(state, props),
// });

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
