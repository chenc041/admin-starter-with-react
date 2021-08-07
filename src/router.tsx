import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { flatRoutes } from './configs/routes';
import Layout from './pages/layout';

const { noLayout, hasLayout } = flatRoutes;

console.log(hasLayout, 'hasLayout', noLayout);

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Layout>
          {hasLayout.map(({ path, component: Component, exact }) => (
            <Route exact={exact} key={path} path={path}>
              <Component path={path} />
            </Route>
          ))}
        </Layout>
        {noLayout.map(({ path, component: Component, exact }) => (
          <Route exact={exact} key={path} path={path}>
            <Component path={path} />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default RouterApp;
