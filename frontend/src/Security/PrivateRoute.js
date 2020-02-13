import React from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      // Only checks if local storage has something called "token"
      // Just keeps out the dilettante hackers; backend is doing the security work
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
);

export default PrivateRoute;