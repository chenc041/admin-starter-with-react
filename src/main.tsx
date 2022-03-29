import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { flatRoutes } from './routes';
import Layout from './pages/layout';

const { noLayout, hasLayout } = flatRoutes;

const RouterApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {hasLayout.map(({ path, component: Component }) => (
            <Route key={path} path={path} element={<Component />} />
          ))}
        </Route>
        {noLayout.map(({ path, component: Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterApp;
