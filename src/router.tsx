import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { flatRoutes } from './configs/routes';
import Layout from './pages/layout';

const { noLayout, hasLayout } = flatRoutes;

const RouterApp = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Layout />}>
          {hasLayout.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component path={path} />} />
          ))}
        </Route>
        {noLayout.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component path={path} />} />
        ))}
      </Routes>
    </Router>
  );
};

export default RouterApp;
