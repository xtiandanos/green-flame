import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MenuNav from './menu';

type localProps = {
  routes: Array<{
    path: 'string';
    component: any;
  }>;
}

const PublicLayout = (props: localProps) => {

  return (
    <div id="public-main">
      <MenuNav />
      <h1>public layout here</h1>
      {
        <Switch>
          {
            props.routes && props.routes.map((route: any) => {
              console.log('here, i am')
              return (<Route
                path={route.path}
                render={props => (<route.component {...props} routes={route.routes} />)}
              />)
            })
          }
        </Switch>
      }
    </div>
  );
}

export default PublicLayout;

