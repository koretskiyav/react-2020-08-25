import { connect } from 'react-redux';
import React from 'react';
import {
  globalErrorSelector,
  restaurantsListSelector,
} from '../../redux/selectors';
import { createStructuredSelector } from 'reselect';

function Error(props) {
  return <h1>Error Page{props.error ? `: ${props.error}` : ''}</h1>;
}

export default connect(
  createStructuredSelector({
    error: globalErrorSelector,
  })
)(Error);
