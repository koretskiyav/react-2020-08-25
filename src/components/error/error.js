import React from 'react';
import { errorMessageCheckout } from '../../redux/selectors';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
const Error = ({ errorMessage }) => {
  return <h2>{errorMessage}</h2>;
};

const mapStateToProps = createStructuredSelector({
  errorMessage: errorMessageCheckout,
});

export default connect(mapStateToProps)(Error);
