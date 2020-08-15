import React from "react";
import { connect } from 'react-redux'
import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ token, children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        (token) ? (
          children
        ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
      }
    />
  );
}

const mapStateToProps = state => ({
  token: state.users.token
});

export default connect(mapStateToProps)(PrivateRoute);
