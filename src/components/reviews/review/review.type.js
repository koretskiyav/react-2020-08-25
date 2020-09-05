import PropTypes from 'prop-types';

const ReviewType = {
  id: PropTypes.string,
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number,
};

export default ReviewType;
