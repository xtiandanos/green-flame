import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PublicRoutes from './public';

function RouteWithSubRoutes(route: any) {
  return (
    <Route
      path={route.path}
      render={props => (
        // pass the sub-routes down to keep nesting
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}

const Routes = () => (
  <Switch>
    {
      PublicRoutes.map((route: any, i: number) => <RouteWithSubRoutes key={i} {...route} />)
    }
  </Switch>
);

export default Routes;
