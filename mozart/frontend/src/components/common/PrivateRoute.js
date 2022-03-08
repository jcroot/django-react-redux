import React from 'react';
import { Route, Navigate } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ element: Element, auth, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (auth.isLoading) {
        return <h2>Loading...</h2>;
      } else if (!auth.isAuthenticated) {
        return <Navigate to="/login" />;
      } else {
        return <Element {...props} />;
      }
    }}
  />
);

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);