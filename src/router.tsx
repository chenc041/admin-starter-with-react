import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { flatRoutes } from './configs/routes';
import Layout from './pages/layout';

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          {flatRoutes.map(({ path, component: Component, exact }) => (
            <Route exact={exact} key={path} path={path}>
              <Component path={path} />
            </Route>
          ))}
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default RouterApp;
