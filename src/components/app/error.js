import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { basketErrorSelector } from '../../redux/selectors';

const Error = ({ error }) => {
  return <div>{error}</div>;
};

export default connect(
  createStructuredSelector({
    error: basketErrorSelector,
  })
)(Error);
