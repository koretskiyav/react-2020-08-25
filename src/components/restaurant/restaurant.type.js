import PropTypes from 'prop-types';
import MenuType from '../menu/menu.type';
import ReviewType from '../reviews/review/review.type';

const RestaurantType = {
  id: PropTypes.string,
  name: PropTypes.string,
  location: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  image: PropTypes.string,
  menu: MenuType,
  reviews: PropTypes.arrayOf(PropTypes.shape(ReviewType)),
};

export default RestaurantType;
