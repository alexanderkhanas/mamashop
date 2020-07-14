import React from "react";
import { Route, Redirect } from "react-router-dom";

export const MobileRoute = ({
  path,
  DesktopComponent,
  MobileComponent,
  ...rest
}) => {
  return (
    <Route
      component={window.innerWidth <= 500 ? MobileComponent : DesktopComponent}
      {...{ path }}
      {...rest}
    />
  );
};

export const PrivateRoute = ({
  Component,
  condition,
  redirectTo,
  path,
  ...rest
}) => {
  return (
    <Route {...rest} {...{ path }}>
      {condition ? <Component {...rest} /> : <Redirect to={redirectTo} />}
    </Route>
  );
};
