import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { flatRoutes } from './configs/routes';
import Layout from './pages/layout';

const { noLayout, hasLayout } = flatRoutes;

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Switch>
        {noLayout.map(({ path, component: Component, exact }) => (
          <Route exact={exact} key={path} path={path}>
            <Component path={path} />
          </Route>
        ))}
        <Layout>
          {hasLayout.map(({ path, component: Component, exact }) => (
            <Route exact={exact} key={path} path={path}>
              <Component path={path} />
            </Route>
          ))}
        </Layout>
      </Switch>
    </BrowserRouter>
  );
};

export default RouterApp;
