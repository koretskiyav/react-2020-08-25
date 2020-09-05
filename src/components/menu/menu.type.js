import PropTypes from 'prop-types';
import ProductType from '../product/product.type';

const MenuType = PropTypes.arrayOf(PropTypes.shape(ProductType));

export default MenuType;
