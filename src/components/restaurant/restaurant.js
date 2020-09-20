import React from 'react';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import { connect } from 'react-redux';
import { averageRatingSelector } from '../../redux/selectors';
import { Redirect, Route, Switch, withRouter } from 'react-router-dom';
import Tabs from '../tabs';

const Restaurant = ({ id, name, menu, reviews, averageRating, match }) => {
  const tabs = [
    {
      title: 'Menu',
      url: `${match.url}/menu`,
      path: `${match.path}/menu`,
      content: <Menu menu={menu} restaurantId={id} />,
    },
    {
      title: 'Review',
      url: `${match.url}/review`,
      path: `${match.path}/review`,
      content: <Reviews reviews={reviews} restaurantId={id} />,
    },
  ];

  return (
    <div>
      <Banner heading={name}>
        {!!averageRating && <Rate value={averageRating} />}
      </Banner>

      <Tabs tabs={tabs} />

      <Switch>
        <Redirect from={`${match.path}`} to={`${match.path}/menu`} exact />
        {tabs.map(({ title, path, content }) => (
          <Route key={`route_${title}`} path={path} render={() => content} />
        ))}
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  menu: PropTypes.array,
  reviews: PropTypes.array,
  averageRating: PropTypes.number,
};

export default connect(
  createStructuredSelector({
    averageRating: averageRatingSelector,
  })
)(withRouter(Restaurant));
