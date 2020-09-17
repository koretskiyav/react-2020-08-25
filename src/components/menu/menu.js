import React from 'react';
import PropTypes from 'prop-types';
import Product from '../product';

import styles from './menu.module.css';
import Basket from '../basket';
import { connect } from 'react-redux';

import {
  productSelector,
  productCurrentSelector,
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';
import { loadAllProducts, loadRestaurantProducts } from '../../redux/actions';
import Loader from '../loader';

class Menu extends React.Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  };

  state = { error: null };

  componentDidMount() {
    this.props.loadAllProducts(this.props.menu);
  }

  componentDidCatch(error) {
    this.setState({ error });
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.restaurantId !== this.props.restaurantId) {
      this.props.loadRestaurantProducts(
        this.props.menu,
        this.props.allProducts
      );
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
          {this.props.products.map((product) => (
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
  allProducts: productSelector(state),
  products: productCurrentSelector(state),
  loading: productsLoadingSelector(state),
  loaded: productsLoadedSelector(state),
});

// const mapStateToProps = (state, props) => ({
//   amount: productAmountSelector(state, props),
//   product: productSelector(state, props),
// });

const mapDispatchToProps = {
  loadAllProducts,
  loadRestaurantProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
