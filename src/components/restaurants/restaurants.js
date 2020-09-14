import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { getTabsRestuarants } from '../../redux/selectors';

const Restaurants = ({ tabs }) => {
  return (
    <Tabs
      tabs={tabs.map((e) => ({
        title: e.title,
        content: <Restaurant id={e.id} />,
      }))}
    />
  );
};

Restaurants.propTypes = {
  restaurants: PropTypes.objectOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ),
};

const mapStateToProps = (state) => {
  return {
    tabs: getTabsRestuarants(state),
  };
};

export default connect(mapStateToProps)(Restaurants);
