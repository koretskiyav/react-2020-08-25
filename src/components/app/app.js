import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Restaurants from '../restaurants';
import Header from '../header';
import Loader from '../loader';

import {
  usersLoadingSelector,
  usersLoadedSelector,
} from '../../redux/selectors';
import { loadUsers } from '../../redux/actions';

const App = ({loadUsers, loading, loaded}) => {
  
  	useEffect(() => {
    	loadUsers();
  	}, []); // eslint-disable-line

  	if (loading || !loaded) return <Loader />;

	return (
	  <div>
	    <Header />
	    <Restaurants />
	  </div>
    );
};


export default connect(
  (state) => ({
    loading: usersLoadingSelector(state),
    loaded: usersLoadedSelector(state),
  }),
  { loadUsers }
)(App);
