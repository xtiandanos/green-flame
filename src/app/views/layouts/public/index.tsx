import React from 'react';
import { Switch, Route } from 'react-router-dom';

import MenuNav from './menu';

import './index.scss';

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
      {
        <Switch>
          {
            props.routes && props.routes.map((route: any, index: number) => {
              return (<Route
                key={index}
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

