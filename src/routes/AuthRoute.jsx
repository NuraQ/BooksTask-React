import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ Component, path, exact = false }) => {
  const isAuthenticated = localStorage.getItem("loggedUser");

  const handleRenderRoute = (props) => {
    if (isAuthenticated ) {
      return <Component />;
    } else {
      return (
        <Redirect
          to={{
            pathname: "/Home",
          }}
        />
      );
    }
  };

  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => handleRenderRoute(props)}
    />
  );
};

export default AuthRoute;
