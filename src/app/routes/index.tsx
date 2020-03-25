import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'react-loadable';

function Loading() {
  return <div>Loading...</div>;
}

const HomePageLoader = Loadable({
  loader: () => import('../views/pages/public/home'),
  loading: Loading,
});

const CartPageLoader = Loadable({
  loader: () => import('../views/pages/public/cart'),
  loading: Loading,
});

const Routes = () => (
  <Switch>
    <Route exact path="/welcome" component={HomePageLoader} />
    <Route exact path="/cart" component={CartPageLoader} />
  </Switch>
);

export default Routes;
